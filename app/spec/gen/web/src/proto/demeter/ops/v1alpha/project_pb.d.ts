import * as jspb from 'google-protobuf'



export class Project extends jspb.Message {
  getId(): string;
  setId(value: string): Project;

  getName(): string;
  setName(value: string): Project;

  getNamespace(): string;
  setNamespace(value: string): Project;

  getStatus(): string;
  setStatus(value: string): Project;

  getBillingProvider(): string;
  setBillingProvider(value: string): Project;

  getBillingProviderId(): string;
  setBillingProviderId(value: string): Project;

  getBillingSubscriptionId(): string;
  setBillingSubscriptionId(value: string): Project;
  hasBillingSubscriptionId(): boolean;
  clearBillingSubscriptionId(): Project;

  getCreatedAt(): string;
  setCreatedAt(value: string): Project;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    id: string,
    name: string,
    namespace: string,
    status: string,
    billingProvider: string,
    billingProviderId: string,
    billingSubscriptionId?: string,
    createdAt: string,
    updatedAt: string,
  }

  export enum BillingSubscriptionIdCase { 
    _BILLING_SUBSCRIPTION_ID_NOT_SET = 0,
    BILLING_SUBSCRIPTION_ID = 7,
  }
}

export class CreateProjectRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectRequest): CreateProjectRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectRequest;
  static deserializeBinaryFromReader(message: CreateProjectRequest, reader: jspb.BinaryReader): CreateProjectRequest;
}

export namespace CreateProjectRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateProjectResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateProjectResponse;

  getName(): string;
  setName(value: string): CreateProjectResponse;

  getNamespace(): string;
  setNamespace(value: string): CreateProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectResponse): CreateProjectResponse.AsObject;
  static serializeBinaryToWriter(message: CreateProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectResponse;
  static deserializeBinaryFromReader(message: CreateProjectResponse, reader: jspb.BinaryReader): CreateProjectResponse;
}

export namespace CreateProjectResponse {
  export type AsObject = {
    id: string,
    name: string,
    namespace: string,
  }
}

export class UpdateProjectRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateProjectRequest;

  getName(): string;
  setName(value: string): UpdateProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectRequest): UpdateProjectRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectRequest;
  static deserializeBinaryFromReader(message: UpdateProjectRequest, reader: jspb.BinaryReader): UpdateProjectRequest;
}

export namespace UpdateProjectRequest {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class UpdateProjectResponse extends jspb.Message {
  getUpdated(): Project | undefined;
  setUpdated(value?: Project): UpdateProjectResponse;
  hasUpdated(): boolean;
  clearUpdated(): UpdateProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectResponse): UpdateProjectResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectResponse;
  static deserializeBinaryFromReader(message: UpdateProjectResponse, reader: jspb.BinaryReader): UpdateProjectResponse;
}

export namespace UpdateProjectResponse {
  export type AsObject = {
    updated?: Project.AsObject,
  }
}

export class FetchProjectsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): FetchProjectsRequest;
  hasPage(): boolean;
  clearPage(): FetchProjectsRequest;

  getPageSize(): number;
  setPageSize(value: number): FetchProjectsRequest;
  hasPageSize(): boolean;
  clearPageSize(): FetchProjectsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchProjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchProjectsRequest): FetchProjectsRequest.AsObject;
  static serializeBinaryToWriter(message: FetchProjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchProjectsRequest;
  static deserializeBinaryFromReader(message: FetchProjectsRequest, reader: jspb.BinaryReader): FetchProjectsRequest;
}

export namespace FetchProjectsRequest {
  export type AsObject = {
    page?: number,
    pageSize?: number,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 1,
  }

  export enum PageSizeCase { 
    _PAGE_SIZE_NOT_SET = 0,
    PAGE_SIZE = 2,
  }
}

export class FetchProjectsResponse extends jspb.Message {
  getRecordsList(): Array<Project>;
  setRecordsList(value: Array<Project>): FetchProjectsResponse;
  clearRecordsList(): FetchProjectsResponse;
  addRecords(value?: Project, index?: number): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchProjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchProjectsResponse): FetchProjectsResponse.AsObject;
  static serializeBinaryToWriter(message: FetchProjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchProjectsResponse;
  static deserializeBinaryFromReader(message: FetchProjectsResponse, reader: jspb.BinaryReader): FetchProjectsResponse;
}

export namespace FetchProjectsResponse {
  export type AsObject = {
    recordsList: Array<Project.AsObject>,
  }
}

export class FetchProjectByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): FetchProjectByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchProjectByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchProjectByIdRequest): FetchProjectByIdRequest.AsObject;
  static serializeBinaryToWriter(message: FetchProjectByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchProjectByIdRequest;
  static deserializeBinaryFromReader(message: FetchProjectByIdRequest, reader: jspb.BinaryReader): FetchProjectByIdRequest;
}

export namespace FetchProjectByIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class FetchProjectByIdResponse extends jspb.Message {
  getRecordsList(): Array<Project>;
  setRecordsList(value: Array<Project>): FetchProjectByIdResponse;
  clearRecordsList(): FetchProjectByIdResponse;
  addRecords(value?: Project, index?: number): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchProjectByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchProjectByIdResponse): FetchProjectByIdResponse.AsObject;
  static serializeBinaryToWriter(message: FetchProjectByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchProjectByIdResponse;
  static deserializeBinaryFromReader(message: FetchProjectByIdResponse, reader: jspb.BinaryReader): FetchProjectByIdResponse;
}

export namespace FetchProjectByIdResponse {
  export type AsObject = {
    recordsList: Array<Project.AsObject>,
  }
}

export class FetchProjectByNamespaceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): FetchProjectByNamespaceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchProjectByNamespaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchProjectByNamespaceRequest): FetchProjectByNamespaceRequest.AsObject;
  static serializeBinaryToWriter(message: FetchProjectByNamespaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchProjectByNamespaceRequest;
  static deserializeBinaryFromReader(message: FetchProjectByNamespaceRequest, reader: jspb.BinaryReader): FetchProjectByNamespaceRequest;
}

export namespace FetchProjectByNamespaceRequest {
  export type AsObject = {
    namespace: string,
  }
}

export class FetchProjectByNamespaceResponse extends jspb.Message {
  getRecordsList(): Array<Project>;
  setRecordsList(value: Array<Project>): FetchProjectByNamespaceResponse;
  clearRecordsList(): FetchProjectByNamespaceResponse;
  addRecords(value?: Project, index?: number): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchProjectByNamespaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchProjectByNamespaceResponse): FetchProjectByNamespaceResponse.AsObject;
  static serializeBinaryToWriter(message: FetchProjectByNamespaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchProjectByNamespaceResponse;
  static deserializeBinaryFromReader(message: FetchProjectByNamespaceResponse, reader: jspb.BinaryReader): FetchProjectByNamespaceResponse;
}

export namespace FetchProjectByNamespaceResponse {
  export type AsObject = {
    recordsList: Array<Project.AsObject>,
  }
}

export class DeleteProjectRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectRequest): DeleteProjectRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectRequest;
  static deserializeBinaryFromReader(message: DeleteProjectRequest, reader: jspb.BinaryReader): DeleteProjectRequest;
}

export namespace DeleteProjectRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteProjectResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectResponse): DeleteProjectResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectResponse;
  static deserializeBinaryFromReader(message: DeleteProjectResponse, reader: jspb.BinaryReader): DeleteProjectResponse;
}

export namespace DeleteProjectResponse {
  export type AsObject = {
  }
}

export class ProjectSecret extends jspb.Message {
  getId(): string;
  setId(value: string): ProjectSecret;

  getProjectId(): string;
  setProjectId(value: string): ProjectSecret;

  getName(): string;
  setName(value: string): ProjectSecret;

  getCreatedAt(): string;
  setCreatedAt(value: string): ProjectSecret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectSecret.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectSecret): ProjectSecret.AsObject;
  static serializeBinaryToWriter(message: ProjectSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectSecret;
  static deserializeBinaryFromReader(message: ProjectSecret, reader: jspb.BinaryReader): ProjectSecret;
}

export namespace ProjectSecret {
  export type AsObject = {
    id: string,
    projectId: string,
    name: string,
    createdAt: string,
  }
}

export class CreateProjectSecretRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateProjectSecretRequest;

  getProjectId(): string;
  setProjectId(value: string): CreateProjectSecretRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectSecretRequest): CreateProjectSecretRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProjectSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectSecretRequest;
  static deserializeBinaryFromReader(message: CreateProjectSecretRequest, reader: jspb.BinaryReader): CreateProjectSecretRequest;
}

export namespace CreateProjectSecretRequest {
  export type AsObject = {
    name: string,
    projectId: string,
  }
}

export class CreateProjectSecretResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateProjectSecretResponse;

  getName(): string;
  setName(value: string): CreateProjectSecretResponse;

  getKey(): string;
  setKey(value: string): CreateProjectSecretResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectSecretResponse): CreateProjectSecretResponse.AsObject;
  static serializeBinaryToWriter(message: CreateProjectSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectSecretResponse;
  static deserializeBinaryFromReader(message: CreateProjectSecretResponse, reader: jspb.BinaryReader): CreateProjectSecretResponse;
}

export namespace CreateProjectSecretResponse {
  export type AsObject = {
    id: string,
    name: string,
    key: string,
  }
}

export class FetchProjectSecretsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): FetchProjectSecretsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchProjectSecretsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchProjectSecretsRequest): FetchProjectSecretsRequest.AsObject;
  static serializeBinaryToWriter(message: FetchProjectSecretsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchProjectSecretsRequest;
  static deserializeBinaryFromReader(message: FetchProjectSecretsRequest, reader: jspb.BinaryReader): FetchProjectSecretsRequest;
}

export namespace FetchProjectSecretsRequest {
  export type AsObject = {
    projectId: string,
  }
}

export class FetchProjectSecretsResponse extends jspb.Message {
  getRecordsList(): Array<ProjectSecret>;
  setRecordsList(value: Array<ProjectSecret>): FetchProjectSecretsResponse;
  clearRecordsList(): FetchProjectSecretsResponse;
  addRecords(value?: ProjectSecret, index?: number): ProjectSecret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchProjectSecretsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchProjectSecretsResponse): FetchProjectSecretsResponse.AsObject;
  static serializeBinaryToWriter(message: FetchProjectSecretsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchProjectSecretsResponse;
  static deserializeBinaryFromReader(message: FetchProjectSecretsResponse, reader: jspb.BinaryReader): FetchProjectSecretsResponse;
}

export namespace FetchProjectSecretsResponse {
  export type AsObject = {
    recordsList: Array<ProjectSecret.AsObject>,
  }
}

export class DeleteProjectSecretRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteProjectSecretRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectSecretRequest): DeleteProjectSecretRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectSecretRequest;
  static deserializeBinaryFromReader(message: DeleteProjectSecretRequest, reader: jspb.BinaryReader): DeleteProjectSecretRequest;
}

export namespace DeleteProjectSecretRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteProjectSecretResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectSecretResponse): DeleteProjectSecretResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectSecretResponse;
  static deserializeBinaryFromReader(message: DeleteProjectSecretResponse, reader: jspb.BinaryReader): DeleteProjectSecretResponse;
}

export namespace DeleteProjectSecretResponse {
  export type AsObject = {
  }
}

export class ProjectUser extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ProjectUser;

  getUserId(): string;
  setUserId(value: string): ProjectUser;

  getName(): string;
  setName(value: string): ProjectUser;

  getEmail(): string;
  setEmail(value: string): ProjectUser;

  getRole(): string;
  setRole(value: string): ProjectUser;

  getCreatedAt(): string;
  setCreatedAt(value: string): ProjectUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectUser.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectUser): ProjectUser.AsObject;
  static serializeBinaryToWriter(message: ProjectUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectUser;
  static deserializeBinaryFromReader(message: ProjectUser, reader: jspb.BinaryReader): ProjectUser;
}

export namespace ProjectUser {
  export type AsObject = {
    projectId: string,
    userId: string,
    name: string,
    email: string,
    role: string,
    createdAt: string,
  }
}

export class FetchProjectUsersRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): FetchProjectUsersRequest;

  getPage(): number;
  setPage(value: number): FetchProjectUsersRequest;
  hasPage(): boolean;
  clearPage(): FetchProjectUsersRequest;

  getPageSize(): number;
  setPageSize(value: number): FetchProjectUsersRequest;
  hasPageSize(): boolean;
  clearPageSize(): FetchProjectUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchProjectUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchProjectUsersRequest): FetchProjectUsersRequest.AsObject;
  static serializeBinaryToWriter(message: FetchProjectUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchProjectUsersRequest;
  static deserializeBinaryFromReader(message: FetchProjectUsersRequest, reader: jspb.BinaryReader): FetchProjectUsersRequest;
}

export namespace FetchProjectUsersRequest {
  export type AsObject = {
    projectId: string,
    page?: number,
    pageSize?: number,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 2,
  }

  export enum PageSizeCase { 
    _PAGE_SIZE_NOT_SET = 0,
    PAGE_SIZE = 3,
  }
}

export class FetchProjectUsersResponse extends jspb.Message {
  getRecordsList(): Array<ProjectUser>;
  setRecordsList(value: Array<ProjectUser>): FetchProjectUsersResponse;
  clearRecordsList(): FetchProjectUsersResponse;
  addRecords(value?: ProjectUser, index?: number): ProjectUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchProjectUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchProjectUsersResponse): FetchProjectUsersResponse.AsObject;
  static serializeBinaryToWriter(message: FetchProjectUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchProjectUsersResponse;
  static deserializeBinaryFromReader(message: FetchProjectUsersResponse, reader: jspb.BinaryReader): FetchProjectUsersResponse;
}

export namespace FetchProjectUsersResponse {
  export type AsObject = {
    recordsList: Array<ProjectUser.AsObject>,
  }
}

export class FetchMeProjectUserRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): FetchMeProjectUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchMeProjectUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchMeProjectUserRequest): FetchMeProjectUserRequest.AsObject;
  static serializeBinaryToWriter(message: FetchMeProjectUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchMeProjectUserRequest;
  static deserializeBinaryFromReader(message: FetchMeProjectUserRequest, reader: jspb.BinaryReader): FetchMeProjectUserRequest;
}

export namespace FetchMeProjectUserRequest {
  export type AsObject = {
    projectId: string,
  }
}

export class FetchMeProjectUserResponse extends jspb.Message {
  getRecordsList(): Array<ProjectUser>;
  setRecordsList(value: Array<ProjectUser>): FetchMeProjectUserResponse;
  clearRecordsList(): FetchMeProjectUserResponse;
  addRecords(value?: ProjectUser, index?: number): ProjectUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchMeProjectUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchMeProjectUserResponse): FetchMeProjectUserResponse.AsObject;
  static serializeBinaryToWriter(message: FetchMeProjectUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchMeProjectUserResponse;
  static deserializeBinaryFromReader(message: FetchMeProjectUserResponse, reader: jspb.BinaryReader): FetchMeProjectUserResponse;
}

export namespace FetchMeProjectUserResponse {
  export type AsObject = {
    recordsList: Array<ProjectUser.AsObject>,
  }
}

export class DeleteProjectUserRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): DeleteProjectUserRequest;

  getId(): string;
  setId(value: string): DeleteProjectUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectUserRequest): DeleteProjectUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectUserRequest;
  static deserializeBinaryFromReader(message: DeleteProjectUserRequest, reader: jspb.BinaryReader): DeleteProjectUserRequest;
}

export namespace DeleteProjectUserRequest {
  export type AsObject = {
    projectId: string,
    id: string,
  }
}

export class DeleteProjectUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectUserResponse): DeleteProjectUserResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectUserResponse;
  static deserializeBinaryFromReader(message: DeleteProjectUserResponse, reader: jspb.BinaryReader): DeleteProjectUserResponse;
}

export namespace DeleteProjectUserResponse {
  export type AsObject = {
  }
}

export class ProjectUserInvite extends jspb.Message {
  getId(): string;
  setId(value: string): ProjectUserInvite;

  getProjectId(): string;
  setProjectId(value: string): ProjectUserInvite;

  getEmail(): string;
  setEmail(value: string): ProjectUserInvite;

  getRole(): string;
  setRole(value: string): ProjectUserInvite;

  getStatus(): string;
  setStatus(value: string): ProjectUserInvite;

  getExpiresIn(): string;
  setExpiresIn(value: string): ProjectUserInvite;

  getCreatedAt(): string;
  setCreatedAt(value: string): ProjectUserInvite;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): ProjectUserInvite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectUserInvite.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectUserInvite): ProjectUserInvite.AsObject;
  static serializeBinaryToWriter(message: ProjectUserInvite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectUserInvite;
  static deserializeBinaryFromReader(message: ProjectUserInvite, reader: jspb.BinaryReader): ProjectUserInvite;
}

export namespace ProjectUserInvite {
  export type AsObject = {
    id: string,
    projectId: string,
    email: string,
    role: string,
    status: string,
    expiresIn: string,
    createdAt: string,
    updatedAt: string,
  }
}

export class FetchProjectUserInvitesRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): FetchProjectUserInvitesRequest;

  getPage(): number;
  setPage(value: number): FetchProjectUserInvitesRequest;
  hasPage(): boolean;
  clearPage(): FetchProjectUserInvitesRequest;

  getPageSize(): number;
  setPageSize(value: number): FetchProjectUserInvitesRequest;
  hasPageSize(): boolean;
  clearPageSize(): FetchProjectUserInvitesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchProjectUserInvitesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchProjectUserInvitesRequest): FetchProjectUserInvitesRequest.AsObject;
  static serializeBinaryToWriter(message: FetchProjectUserInvitesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchProjectUserInvitesRequest;
  static deserializeBinaryFromReader(message: FetchProjectUserInvitesRequest, reader: jspb.BinaryReader): FetchProjectUserInvitesRequest;
}

export namespace FetchProjectUserInvitesRequest {
  export type AsObject = {
    projectId: string,
    page?: number,
    pageSize?: number,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 2,
  }

  export enum PageSizeCase { 
    _PAGE_SIZE_NOT_SET = 0,
    PAGE_SIZE = 3,
  }
}

export class FetchProjectUserInvitesResponse extends jspb.Message {
  getRecordsList(): Array<ProjectUserInvite>;
  setRecordsList(value: Array<ProjectUserInvite>): FetchProjectUserInvitesResponse;
  clearRecordsList(): FetchProjectUserInvitesResponse;
  addRecords(value?: ProjectUserInvite, index?: number): ProjectUserInvite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchProjectUserInvitesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchProjectUserInvitesResponse): FetchProjectUserInvitesResponse.AsObject;
  static serializeBinaryToWriter(message: FetchProjectUserInvitesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchProjectUserInvitesResponse;
  static deserializeBinaryFromReader(message: FetchProjectUserInvitesResponse, reader: jspb.BinaryReader): FetchProjectUserInvitesResponse;
}

export namespace FetchProjectUserInvitesResponse {
  export type AsObject = {
    recordsList: Array<ProjectUserInvite.AsObject>,
  }
}

export class CreateProjectUserInviteRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): CreateProjectUserInviteRequest;

  getEmail(): string;
  setEmail(value: string): CreateProjectUserInviteRequest;

  getRole(): string;
  setRole(value: string): CreateProjectUserInviteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectUserInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectUserInviteRequest): CreateProjectUserInviteRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProjectUserInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectUserInviteRequest;
  static deserializeBinaryFromReader(message: CreateProjectUserInviteRequest, reader: jspb.BinaryReader): CreateProjectUserInviteRequest;
}

export namespace CreateProjectUserInviteRequest {
  export type AsObject = {
    projectId: string,
    email: string,
    role: string,
  }
}

export class CreateProjectUserInviteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectUserInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectUserInviteResponse): CreateProjectUserInviteResponse.AsObject;
  static serializeBinaryToWriter(message: CreateProjectUserInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectUserInviteResponse;
  static deserializeBinaryFromReader(message: CreateProjectUserInviteResponse, reader: jspb.BinaryReader): CreateProjectUserInviteResponse;
}

export namespace CreateProjectUserInviteResponse {
  export type AsObject = {
  }
}

export class AcceptProjectUserInviteRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): AcceptProjectUserInviteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptProjectUserInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptProjectUserInviteRequest): AcceptProjectUserInviteRequest.AsObject;
  static serializeBinaryToWriter(message: AcceptProjectUserInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptProjectUserInviteRequest;
  static deserializeBinaryFromReader(message: AcceptProjectUserInviteRequest, reader: jspb.BinaryReader): AcceptProjectUserInviteRequest;
}

export namespace AcceptProjectUserInviteRequest {
  export type AsObject = {
    code: string,
  }
}

export class AcceptProjectUserInviteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptProjectUserInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptProjectUserInviteResponse): AcceptProjectUserInviteResponse.AsObject;
  static serializeBinaryToWriter(message: AcceptProjectUserInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptProjectUserInviteResponse;
  static deserializeBinaryFromReader(message: AcceptProjectUserInviteResponse, reader: jspb.BinaryReader): AcceptProjectUserInviteResponse;
}

export namespace AcceptProjectUserInviteResponse {
  export type AsObject = {
  }
}

export class ResendProjectUserInviteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ResendProjectUserInviteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendProjectUserInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResendProjectUserInviteRequest): ResendProjectUserInviteRequest.AsObject;
  static serializeBinaryToWriter(message: ResendProjectUserInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendProjectUserInviteRequest;
  static deserializeBinaryFromReader(message: ResendProjectUserInviteRequest, reader: jspb.BinaryReader): ResendProjectUserInviteRequest;
}

export namespace ResendProjectUserInviteRequest {
  export type AsObject = {
    id: string,
  }
}

export class ResendProjectUserInviteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendProjectUserInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResendProjectUserInviteResponse): ResendProjectUserInviteResponse.AsObject;
  static serializeBinaryToWriter(message: ResendProjectUserInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendProjectUserInviteResponse;
  static deserializeBinaryFromReader(message: ResendProjectUserInviteResponse, reader: jspb.BinaryReader): ResendProjectUserInviteResponse;
}

export namespace ResendProjectUserInviteResponse {
  export type AsObject = {
  }
}

export class DeleteProjectUserInviteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteProjectUserInviteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectUserInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectUserInviteRequest): DeleteProjectUserInviteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectUserInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectUserInviteRequest;
  static deserializeBinaryFromReader(message: DeleteProjectUserInviteRequest, reader: jspb.BinaryReader): DeleteProjectUserInviteRequest;
}

export namespace DeleteProjectUserInviteRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteProjectUserInviteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectUserInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectUserInviteResponse): DeleteProjectUserInviteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectUserInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectUserInviteResponse;
  static deserializeBinaryFromReader(message: DeleteProjectUserInviteResponse, reader: jspb.BinaryReader): DeleteProjectUserInviteResponse;
}

export namespace DeleteProjectUserInviteResponse {
  export type AsObject = {
  }
}

