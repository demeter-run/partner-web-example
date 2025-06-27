import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { DemeterServerService } from "~/services/demeter.server";
import { getSession } from "~/session";
import { Project } from "~/spec/gen/node/src/proto/demeter/ops/v1alpha/project_pb";
import { CreateResourceResponse, Resource } from "~/spec/gen/node/src/proto/demeter/ops/v1alpha/resource_pb";

type LoaderResult = {
  isAuthenticated: boolean,
  projects: Project[],
};

type ActionResult = {
  resource?: CreateResourceResponse
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const token = session.get('token');

  const result: LoaderResult = { isAuthenticated: !!token, projects: [] }

  if (!token) {
    return result
  }

  const demeterService = new DemeterServerService(token)
  result.projects = await demeterService.getProjects()

  if (!result.projects.length) {
    const projectName = "My First Project"
    await demeterService.createProject(projectName);
    result.projects = await demeterService.getProjects()
  }

  return result
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const token = session.get('token');

  const result: ActionResult = {}
  if (!token) {
    return result
  }

  const demeterService = new DemeterServerService(token)

  const formData = await request.formData();
  const projectId = formData.get("projectId")

  if (!projectId) {
    return result
  }

  const workerName = "My worker"
  const workerWasm = "https://github.com/txpipe/awesome-starter-kits/releases/latest/download/worker-example.wasm";
  const workerConfig = { custom_hello: "Hi" };
  const workerVersion = "1"
  const workerDemeterKind = "BaliusWorker"

  const spec = {
    // These spec data come from the BaliusWorker metadata https://console.demeter.run/mgmt/metadata/ports/
    network: "cardano-mainnet",
    operatorVersion: "1",
    throughputTier: "0",

    // These data are customized per worker 
    displayName: workerName,
    url: workerWasm,
    config: workerConfig,
    version: workerVersion,
  };

  try {
    result.resource = await demeterService.createResource(
      projectId.toString(),
      workerDemeterKind,
      JSON.stringify(spec),
    );
  } catch (err) {
    console.error(err);
  }

  return result

}

export default function Index() {
  const { isAuthenticated, projects } = useLoaderData<LoaderResult>();

  const [projectSelected, setProjectSelected] = useState<Project>(projects?.[0])
  const [resources, setResources] = useState<Resource[]>([])

  const fetcher = useFetcher()


  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/${projectSelected.id}/resources`)
      const data = await response.json()

      if (data.resources) {
        setResources(data.resources)
      }
    })()
  }, [projectSelected, fetcher.data])


  async function createWorker() {
    if (!projectSelected) {
      alert("Select a project first");
      return
    }
    const data = new FormData()
    data.set("projectId", projectSelected.id);

    fetcher.submit(data, {
      method: "POST",
    })
  }

  const loading = fetcher.state == 'submitting' || fetcher.state == 'loading';

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="leading text-2xl font-bold mb-6">
        Custom Demeter UI (Server Side)
      </h1>

      <div className="mb-3">
        <a className="underline" href="/client">
          Web GRPC
        </a>
      </div>

      {
        !isAuthenticated && (
          <div>
            <a href="/login" className="px-2 py-1 rounded-sm bg-green-500"> login </a>
          </div>
        )
      }

      {
        isAuthenticated && (
          <>
            <div className="mb-6">
              <a href="/logout" className="px-2 py-1 rounded-sm bg-red-500"> logout </a>
            </div>

            <div className="flex space-x-12">
              <div>
                <h2 className="text-xl mb-3 font-bold">
                  Projects
                </h2>
                {
                  projects.map(p => {
                    return (
                      <div key={p.id} onClick={() => setProjectSelected(p)}>
                        {p.name}
                        {
                          projectSelected?.id == p.id && (
                            <span >
                              (selected)
                            </span>
                          )
                        }
                      </div>
                    )
                  })
                }
              </div>
              <div>
                <h2 className="text-xl mb-3 font-bold">
                  Resources
                </h2>

                <div className="mb-3">
                  <button type="button" className="py-1 px-2 bg-green-500 rounded-sm" onClick={createWorker} disabled={loading}>
                    {
                      loading ? 'loading' : 'create a worker'
                    }
                  </button>
                </div>

                {
                  resources.map(r => {
                    return (
                      <div key={r.id}>
                        {r.name}
                      </div>
                    )
                  })
                }
              </div>

            </div>
          </>
        )
      }

    </div>
  );
}

