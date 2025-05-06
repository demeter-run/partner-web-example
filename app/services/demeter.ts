import { createPromiseClient, Interceptor } from '@connectrpc/connect';
import { createGrpcTransport } from '@connectrpc/connect-node';
import { config } from '~/config';

import { ProjectService } from '~/spec/gen/node/src/proto/demeter/ops/v1alpha/project_connect';
import { CreateProjectResponse, Project } from '~/spec/gen/node/src/proto/demeter/ops/v1alpha/project_pb';
import { ResourceService } from '~/spec/gen/node/src/proto/demeter/ops/v1alpha/resource_connect';
import { Resource } from '~/spec/gen/node/src/proto/demeter/ops/v1alpha/resource_pb';



export class DemeterService {
  private projectClient: ReturnType<typeof createPromiseClient<typeof ProjectService>>;
  private resourceClient: ReturnType<typeof createPromiseClient<typeof ResourceService>>;

  constructor(token: string) {
    const headerInterceptor = metadataInterceptor({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const transport = createGrpcTransport({
      httpVersion: '2',
      baseUrl: config.api.url,
      interceptors: [headerInterceptor],
    });

    this.projectClient = createPromiseClient(ProjectService, transport);
    this.resourceClient = createPromiseClient(ResourceService, transport);
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
