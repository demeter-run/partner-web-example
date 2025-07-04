// @generated by protobuf-ts 2.11.1
// @generated from protobuf file "proto/demeter/ops/v1alpha/project.proto" (package "demeter.ops.v1alpha", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ProjectService } from "./project";
import type { DeleteProjectUserInviteResponse } from "./project";
import type { DeleteProjectUserInviteRequest } from "./project";
import type { ResendProjectUserInviteResponse } from "./project";
import type { ResendProjectUserInviteRequest } from "./project";
import type { AcceptProjectUserInviteResponse } from "./project";
import type { AcceptProjectUserInviteRequest } from "./project";
import type { CreateProjectUserInviteResponse } from "./project";
import type { CreateProjectUserInviteRequest } from "./project";
import type { FetchProjectUserInvitesResponse } from "./project";
import type { FetchProjectUserInvitesRequest } from "./project";
import type { DeleteProjectUserResponse } from "./project";
import type { DeleteProjectUserRequest } from "./project";
import type { FetchMeProjectUserResponse } from "./project";
import type { FetchMeProjectUserRequest } from "./project";
import type { FetchProjectUsersResponse } from "./project";
import type { FetchProjectUsersRequest } from "./project";
import type { DeleteProjectSecretResponse } from "./project";
import type { DeleteProjectSecretRequest } from "./project";
import type { CreateProjectSecretResponse } from "./project";
import type { CreateProjectSecretRequest } from "./project";
import type { FetchProjectSecretsResponse } from "./project";
import type { FetchProjectSecretsRequest } from "./project";
import type { DeleteProjectResponse } from "./project";
import type { DeleteProjectRequest } from "./project";
import type { UpdateProjectResponse } from "./project";
import type { UpdateProjectRequest } from "./project";
import type { CreateProjectResponse } from "./project";
import type { CreateProjectRequest } from "./project";
import type { FetchProjectByNamespaceResponse } from "./project";
import type { FetchProjectByNamespaceRequest } from "./project";
import type { FetchProjectByIdResponse } from "./project";
import type { FetchProjectByIdRequest } from "./project";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { FetchProjectsResponse } from "./project";
import type { FetchProjectsRequest } from "./project";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service demeter.ops.v1alpha.ProjectService
 */
export interface IProjectServiceClient {
    /**
     * @generated from protobuf rpc: FetchProjects
     */
    fetchProjects(input: FetchProjectsRequest, options?: RpcOptions): UnaryCall<FetchProjectsRequest, FetchProjectsResponse>;
    /**
     * @generated from protobuf rpc: FetchProjectById
     */
    fetchProjectById(input: FetchProjectByIdRequest, options?: RpcOptions): UnaryCall<FetchProjectByIdRequest, FetchProjectByIdResponse>;
    /**
     * @generated from protobuf rpc: FetchProjectByNamespace
     */
    fetchProjectByNamespace(input: FetchProjectByNamespaceRequest, options?: RpcOptions): UnaryCall<FetchProjectByNamespaceRequest, FetchProjectByNamespaceResponse>;
    /**
     * @generated from protobuf rpc: CreateProject
     */
    createProject(input: CreateProjectRequest, options?: RpcOptions): UnaryCall<CreateProjectRequest, CreateProjectResponse>;
    /**
     * @generated from protobuf rpc: UpdateProject
     */
    updateProject(input: UpdateProjectRequest, options?: RpcOptions): UnaryCall<UpdateProjectRequest, UpdateProjectResponse>;
    /**
     * @generated from protobuf rpc: DeleteProject
     */
    deleteProject(input: DeleteProjectRequest, options?: RpcOptions): UnaryCall<DeleteProjectRequest, DeleteProjectResponse>;
    /**
     * @generated from protobuf rpc: FetchProjectSecrets
     */
    fetchProjectSecrets(input: FetchProjectSecretsRequest, options?: RpcOptions): UnaryCall<FetchProjectSecretsRequest, FetchProjectSecretsResponse>;
    /**
     * @generated from protobuf rpc: CreateProjectSecret
     */
    createProjectSecret(input: CreateProjectSecretRequest, options?: RpcOptions): UnaryCall<CreateProjectSecretRequest, CreateProjectSecretResponse>;
    /**
     * @generated from protobuf rpc: DeleteProjectSecret
     */
    deleteProjectSecret(input: DeleteProjectSecretRequest, options?: RpcOptions): UnaryCall<DeleteProjectSecretRequest, DeleteProjectSecretResponse>;
    /**
     * @generated from protobuf rpc: FetchProjectUsers
     */
    fetchProjectUsers(input: FetchProjectUsersRequest, options?: RpcOptions): UnaryCall<FetchProjectUsersRequest, FetchProjectUsersResponse>;
    /**
     * @generated from protobuf rpc: FetchMeProjectUser
     */
    fetchMeProjectUser(input: FetchMeProjectUserRequest, options?: RpcOptions): UnaryCall<FetchMeProjectUserRequest, FetchMeProjectUserResponse>;
    /**
     * @generated from protobuf rpc: DeleteProjectUser
     */
    deleteProjectUser(input: DeleteProjectUserRequest, options?: RpcOptions): UnaryCall<DeleteProjectUserRequest, DeleteProjectUserResponse>;
    /**
     * @generated from protobuf rpc: FetchProjectUserInvites
     */
    fetchProjectUserInvites(input: FetchProjectUserInvitesRequest, options?: RpcOptions): UnaryCall<FetchProjectUserInvitesRequest, FetchProjectUserInvitesResponse>;
    /**
     * @generated from protobuf rpc: CreateProjectUserInvite
     */
    createProjectUserInvite(input: CreateProjectUserInviteRequest, options?: RpcOptions): UnaryCall<CreateProjectUserInviteRequest, CreateProjectUserInviteResponse>;
    /**
     * @generated from protobuf rpc: AcceptProjectUserInvite
     */
    acceptProjectUserInvite(input: AcceptProjectUserInviteRequest, options?: RpcOptions): UnaryCall<AcceptProjectUserInviteRequest, AcceptProjectUserInviteResponse>;
    /**
     * @generated from protobuf rpc: ResendProjectUserInvite
     */
    resendProjectUserInvite(input: ResendProjectUserInviteRequest, options?: RpcOptions): UnaryCall<ResendProjectUserInviteRequest, ResendProjectUserInviteResponse>;
    /**
     * @generated from protobuf rpc: DeleteProjectUserInvite
     */
    deleteProjectUserInvite(input: DeleteProjectUserInviteRequest, options?: RpcOptions): UnaryCall<DeleteProjectUserInviteRequest, DeleteProjectUserInviteResponse>;
}
/**
 * @generated from protobuf service demeter.ops.v1alpha.ProjectService
 */
export class ProjectServiceClient implements IProjectServiceClient, ServiceInfo {
    typeName = ProjectService.typeName;
    methods = ProjectService.methods;
    options = ProjectService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: FetchProjects
     */
    fetchProjects(input: FetchProjectsRequest, options?: RpcOptions): UnaryCall<FetchProjectsRequest, FetchProjectsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<FetchProjectsRequest, FetchProjectsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: FetchProjectById
     */
    fetchProjectById(input: FetchProjectByIdRequest, options?: RpcOptions): UnaryCall<FetchProjectByIdRequest, FetchProjectByIdResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<FetchProjectByIdRequest, FetchProjectByIdResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: FetchProjectByNamespace
     */
    fetchProjectByNamespace(input: FetchProjectByNamespaceRequest, options?: RpcOptions): UnaryCall<FetchProjectByNamespaceRequest, FetchProjectByNamespaceResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<FetchProjectByNamespaceRequest, FetchProjectByNamespaceResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CreateProject
     */
    createProject(input: CreateProjectRequest, options?: RpcOptions): UnaryCall<CreateProjectRequest, CreateProjectResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateProjectRequest, CreateProjectResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdateProject
     */
    updateProject(input: UpdateProjectRequest, options?: RpcOptions): UnaryCall<UpdateProjectRequest, UpdateProjectResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateProjectRequest, UpdateProjectResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteProject
     */
    deleteProject(input: DeleteProjectRequest, options?: RpcOptions): UnaryCall<DeleteProjectRequest, DeleteProjectResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteProjectRequest, DeleteProjectResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: FetchProjectSecrets
     */
    fetchProjectSecrets(input: FetchProjectSecretsRequest, options?: RpcOptions): UnaryCall<FetchProjectSecretsRequest, FetchProjectSecretsResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<FetchProjectSecretsRequest, FetchProjectSecretsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CreateProjectSecret
     */
    createProjectSecret(input: CreateProjectSecretRequest, options?: RpcOptions): UnaryCall<CreateProjectSecretRequest, CreateProjectSecretResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateProjectSecretRequest, CreateProjectSecretResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteProjectSecret
     */
    deleteProjectSecret(input: DeleteProjectSecretRequest, options?: RpcOptions): UnaryCall<DeleteProjectSecretRequest, DeleteProjectSecretResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteProjectSecretRequest, DeleteProjectSecretResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: FetchProjectUsers
     */
    fetchProjectUsers(input: FetchProjectUsersRequest, options?: RpcOptions): UnaryCall<FetchProjectUsersRequest, FetchProjectUsersResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<FetchProjectUsersRequest, FetchProjectUsersResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: FetchMeProjectUser
     */
    fetchMeProjectUser(input: FetchMeProjectUserRequest, options?: RpcOptions): UnaryCall<FetchMeProjectUserRequest, FetchMeProjectUserResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<FetchMeProjectUserRequest, FetchMeProjectUserResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteProjectUser
     */
    deleteProjectUser(input: DeleteProjectUserRequest, options?: RpcOptions): UnaryCall<DeleteProjectUserRequest, DeleteProjectUserResponse> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteProjectUserRequest, DeleteProjectUserResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: FetchProjectUserInvites
     */
    fetchProjectUserInvites(input: FetchProjectUserInvitesRequest, options?: RpcOptions): UnaryCall<FetchProjectUserInvitesRequest, FetchProjectUserInvitesResponse> {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept<FetchProjectUserInvitesRequest, FetchProjectUserInvitesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CreateProjectUserInvite
     */
    createProjectUserInvite(input: CreateProjectUserInviteRequest, options?: RpcOptions): UnaryCall<CreateProjectUserInviteRequest, CreateProjectUserInviteResponse> {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateProjectUserInviteRequest, CreateProjectUserInviteResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: AcceptProjectUserInvite
     */
    acceptProjectUserInvite(input: AcceptProjectUserInviteRequest, options?: RpcOptions): UnaryCall<AcceptProjectUserInviteRequest, AcceptProjectUserInviteResponse> {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return stackIntercept<AcceptProjectUserInviteRequest, AcceptProjectUserInviteResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ResendProjectUserInvite
     */
    resendProjectUserInvite(input: ResendProjectUserInviteRequest, options?: RpcOptions): UnaryCall<ResendProjectUserInviteRequest, ResendProjectUserInviteResponse> {
        const method = this.methods[15], opt = this._transport.mergeOptions(options);
        return stackIntercept<ResendProjectUserInviteRequest, ResendProjectUserInviteResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteProjectUserInvite
     */
    deleteProjectUserInvite(input: DeleteProjectUserInviteRequest, options?: RpcOptions): UnaryCall<DeleteProjectUserInviteRequest, DeleteProjectUserInviteResponse> {
        const method = this.methods[16], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteProjectUserInviteRequest, DeleteProjectUserInviteResponse>("unary", this._transport, method, opt, input);
    }
}
