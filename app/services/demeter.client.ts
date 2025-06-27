import { FetchProjectsRequest, Project } from "~/spec/gen/web/src/proto/demeter/ops/v1alpha/project_pb"
import { ProjectServiceClient } from "~/spec/gen/web/src/proto/demeter/ops/v1alpha/ProjectServiceClientPb"

export class DemeterClientService {
  private projectClient: ProjectServiceClient;

  constructor(url: string, token: string) {
    this.projectClient = new ProjectServiceClient(url, {
      Authorization: `Bearer ${token}`,
    })
  }

  async getProjects(limit: number = 100, page: number = 1): Promise<Array<Project>> {
    let request = new FetchProjectsRequest();
    request.setPage(page)
    request.setPageSize(limit)

    let result = await this.projectClient.fetchProjects(request);
    return result.getRecordsList()
  }
}


