import { LoaderFunction } from "@remix-run/node";

import { DemeterServerService } from "~/services/demeter.server";
import { getSession } from "~/session";
import { Resource } from "~/spec/gen/node/src/proto/demeter/ops/v1alpha/resource_pb";

type LoaderResult = {
  resources: Resource[]
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const token = session.get('token');

  const result: LoaderResult = { resources: [], }

  if (!token) {
    return result
  }

  const demeter = new DemeterServerService(token)

  result.resources = await demeter.getResources(params.projectId!)

  return result
}
