import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { Project } from "~/spec/gen/web/src/proto/demeter/ops/v1alpha/project";
import { ProjectServiceClient } from "~/spec/gen/web/src/proto/demeter/ops/v1alpha/project.client";
import { CreateResourceResponse, Resource } from "~/spec/gen/web/src/proto/demeter/ops/v1alpha/resource";
import { ResourceServiceClient } from "~/spec/gen/web/src/proto/demeter/ops/v1alpha/resource.client";

export class DemeterClientService {
  private projectClient: ProjectServiceClient;
  private resourceClient: ResourceServiceClient;

  constructor(url: string, token: string) {
    let transport = new GrpcWebFetchTransport({
      baseUrl: url,
      meta: {
        Authorization: `Bearer ${token}`,
      }
    });

    this.projectClient = new ProjectServiceClient(transport)
    this.resourceClient = new ResourceServiceClient(transport)
  }

  async getProjects(limit: number = 100, page: number = 1): Promise<Array<Project>> {
    let result = await this.projectClient.fetchProjects({ page, pageSize: limit });
    return result.response.records
  }

  async getResources(projectId: string, limit: number = 100, offset: number = 1): Promise<Array<Resource>> {
    const result = await this.resourceClient.fetchResources({
      projectId,
      category: "demeter-worker",
      page: offset,
      pageSize: limit,
    });
    return result.response.records
  }

  async createResource(projectId: string, kind: string, spec: string): Promise<CreateResourceResponse> {
    const result = await this.resourceClient.createResource({
      projectId,
      kind,
      spec,
    });

    return result.response
  }
}


