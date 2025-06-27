import { createClient, Interceptor } from '@connectrpc/connect';
import { createGrpcTransport } from '@connectrpc/connect-node';
import { config } from '~/config';

import { ProjectService, CreateProjectResponse, Project } from '~/spec/gen/node/src/proto/demeter/ops/v1alpha/project_pb';
import { ResourceService, Resource } from '~/spec/gen/node/src/proto/demeter/ops/v1alpha/resource_pb';

export class DemeterServerService {
  private projectClient: ReturnType<typeof createClient<typeof ProjectService>>;
  private resourceClient: ReturnType<typeof createClient<typeof ResourceService>>;

  constructor(token: string) {
    const headerInterceptor = metadataInterceptor({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const transport = createGrpcTransport({
      baseUrl: config.api.url,
      interceptors: [headerInterceptor],
    });

    this.projectClient = createClient(ProjectService, transport);
    this.resourceClient = createClient(ResourceService, transport);
  }

  async getProjects(limit: number = 100, page: number = 1): Promise<Array<Project>> {
    const result = await this.projectClient.fetchProjects({
      page,
      pageSize: limit,
    });
    return result.records || [];
  }

  async createProject(name: string): Promise<CreateProjectResponse> {
    const result = await this.projectClient.createProject({
      name,
    });
    return result;
  }

  async getResources(projectId: string, limit: number = 100, offset: number = 1): Promise<Array<Resource>> {
    const result = await this.resourceClient.fetchResources({
      projectId,
      category: "demeter-worker",
      page: offset,
      pageSize: limit,
    });

    return result.records || [];
  }

  async createResource(projectId: string, kind: string, spec: string) {
    const result = await this.resourceClient.createResource({
      projectId,
      kind,
      spec,
    });

    return result;
  }
}

export type ClientBuilderOptions = {
  headers?: Record<string, string>;
};

function metadataInterceptor(options?: ClientBuilderOptions): Interceptor {
  return next => async req => {
    if (options?.headers) {
      Object.entries(options.headers).forEach(([key, value]) =>
        req.header.set(key, value),
      );
    }
    return await next(req);
  };
}

