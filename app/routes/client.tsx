
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { config } from "~/config";
import { DemeterClientService } from "~/services/demeter.client";
import { getSession } from "~/session";
import { Project } from "~/spec/gen/web/src/proto/demeter/ops/v1alpha/project";
import { Resource } from "~/spec/gen/web/src/proto/demeter/ops/v1alpha/resource";

type LoaderResult = {
  isAuthenticated: boolean,
  url: string | undefined
  token: string | undefined
};


export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const token = session.get('token');

  const result: LoaderResult = { isAuthenticated: !!token, token, url: config.api.url }

  if (!token) {
    return result
  }

  return result
}

export default function Index() {
  const { isAuthenticated, token, url } = useLoaderData<LoaderResult>();

  const [projectSelected, setProjectSelected] = useState<Project>()
  const [projects, setProjects] = useState<Project[]>([])
  const [resources, setResources] = useState<Resource[]>([])

  const [loading, setLoading] = useState<boolean>(false)
  const [loadingProjects, setLoadingProjects] = useState<boolean>(false)
  const [loadingResources, setLoadingResources] = useState<boolean>(false)

  const client = useRef<DemeterClientService | null>(null)

  useEffect(() => {
    (async () => {
      try {
        setLoadingProjects(true)

        client.current = new DemeterClientService(url!, token || "");

        let projects = await client.current.getProjects()
        setProjects(projects)
        setProjectSelected(projects[0])

      } catch (err) {
        console.error(err)
      }
      finally {
        setLoadingProjects(false)
      }
    })()
  }, [url, token])

  useEffect(() => {
    if (projectSelected) {
      (async () => {
        try {
          setLoadingResources(true)
          let resources = await client.current?.getResources(projectSelected.id)
          setResources(resources || [])
        } catch (err) {
          console.error(err)
        } finally {
          setLoadingResources(false)
        }
      })()
    }
  }, [projectSelected])


  async function createWorker() {
    if (!projectSelected) {
      alert("Select a project first");
      return
    }

    try {
      setLoading(true)
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


      await client.current?.createResource(projectSelected.id, workerDemeterKind, JSON.stringify(spec))

      let resources = await client.current?.getResources(projectSelected.id)
      setResources(resources || [])
    }
    catch (err) {
      console.error(err)
    }
    finally {
      setLoading(false)
    }
  }


  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="leading text-2xl font-bold mb-6">
        Custom Demeter UI (Web GRPC)
      </h1>

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
                  loadingProjects ? <div> loading ... </div> :
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
                  loadingResources ? <div> loading ... </div> :
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

