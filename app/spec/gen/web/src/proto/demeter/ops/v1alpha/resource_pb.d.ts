import * as jspb from 'google-protobuf'



export class CreateResourceRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): CreateResourceRequest;

  getKind(): string;
  setKind(value: string): CreateResourceRequest;

  getSpec(): string;
  setSpec(value: string): CreateResourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResourceRequest): CreateResourceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResourceRequest;
  static deserializeBinaryFromReader(message: CreateResourceRequest, reader: jspb.BinaryReader): CreateResourceRequest;
}

export namespace CreateResourceRequest {
  export type AsObject = {
    projectId: string,
    kind: string,
    spec: string,
  }
}

export class CreateResourceResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateResourceResponse;

  getName(): string;
  setName(value: string): CreateResourceResponse;

  getKind(): string;
  setKind(value: string): CreateResourceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResourceResponse): CreateResourceResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResourceResponse;
  static deserializeBinaryFromReader(message: CreateResourceResponse, reader: jspb.BinaryReader): CreateResourceResponse;
}

export namespace CreateResourceResponse {
  export type AsObject = {
    id: string,
    name: string,
    kind: string,
  }
}

export class UpdateResourceRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateResourceRequest;

  getSpecPatch(): string;
  setSpecPatch(value: string): UpdateResourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResourceRequest): UpdateResourceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResourceRequest;
  static deserializeBinaryFromReader(message: UpdateResourceRequest, reader: jspb.BinaryReader): UpdateResourceRequest;
}

export namespace UpdateResourceRequest {
  export type AsObject = {
    id: string,
    specPatch: string,
  }
}

export class UpdateResourceResponse extends jspb.Message {
  getUpdated(): Resource | undefined;
  setUpdated(value?: Resource): UpdateResourceResponse;
  hasUpdated(): boolean;
  clearUpdated(): UpdateResourceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResourceResponse): UpdateResourceResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateResourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResourceResponse;
  static deserializeBinaryFromReader(message: UpdateResourceResponse, reader: jspb.BinaryReader): UpdateResourceResponse;
}

export namespace UpdateResourceResponse {
  export type AsObject = {
    updated?: Resource.AsObject,
  }
}

export class Resource extends jspb.Message {
  getId(): string;
  setId(value: string): Resource;

  getName(): string;
  setName(value: string): Resource;

  getKind(): string;
  setKind(value: string): Resource;

  getSpec(): string;
  setSpec(value: string): Resource;

  getAnnotations(): string;
  setAnnotations(value: string): Resource;
  hasAnnotations(): boolean;
  clearAnnotations(): Resource;

  getStatus(): string;
  setStatus(value: string): Resource;

  getCreatedAt(): string;
  setCreatedAt(value: string): Resource;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    id: string,
    name: string,
    kind: string,
    spec: string,
    annotations?: string,
    status: string,
    createdAt: string,
    updatedAt: string,
  }

  export enum AnnotationsCase { 
    _ANNOTATIONS_NOT_SET = 0,
    ANNOTATIONS = 5,
  }
}

export class FetchResourcesRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): FetchResourcesRequest;

  getPage(): number;
  setPage(value: number): FetchResourcesRequest;
  hasPage(): boolean;
  clearPage(): FetchResourcesRequest;

  getPageSize(): number;
  setPageSize(value: number): FetchResourcesRequest;
  hasPageSize(): boolean;
  clearPageSize(): FetchResourcesRequest;

  getCategory(): string;
  setCategory(value: string): FetchResourcesRequest;
  hasCategory(): boolean;
  clearCategory(): FetchResourcesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchResourcesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchResourcesRequest): FetchResourcesRequest.AsObject;
  static serializeBinaryToWriter(message: FetchResourcesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchResourcesRequest;
  static deserializeBinaryFromReader(message: FetchResourcesRequest, reader: jspb.BinaryReader): FetchResourcesRequest;
}

export namespace FetchResourcesRequest {
  export type AsObject = {
    projectId: string,
    page?: number,
    pageSize?: number,
    category?: string,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 2,
  }

  export enum PageSizeCase { 
    _PAGE_SIZE_NOT_SET = 0,
    PAGE_SIZE = 3,
  }

  export enum CategoryCase { 
    _CATEGORY_NOT_SET = 0,
    CATEGORY = 4,
  }
}

export class FetchResourcesResponse extends jspb.Message {
  getRecordsList(): Array<Resource>;
  setRecordsList(value: Array<Resource>): FetchResourcesResponse;
  clearRecordsList(): FetchResourcesResponse;
  addRecords(value?: Resource, index?: number): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchResourcesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchResourcesResponse): FetchResourcesResponse.AsObject;
  static serializeBinaryToWriter(message: FetchResourcesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchResourcesResponse;
  static deserializeBinaryFromReader(message: FetchResourcesResponse, reader: jspb.BinaryReader): FetchResourcesResponse;
}

export namespace FetchResourcesResponse {
  export type AsObject = {
    recordsList: Array<Resource.AsObject>,
  }
}

export class FetchResourcesByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): FetchResourcesByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchResourcesByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchResourcesByIdRequest): FetchResourcesByIdRequest.AsObject;
  static serializeBinaryToWriter(message: FetchResourcesByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchResourcesByIdRequest;
  static deserializeBinaryFromReader(message: FetchResourcesByIdRequest, reader: jspb.BinaryReader): FetchResourcesByIdRequest;
}

export namespace FetchResourcesByIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class FetchResourcesByIdResponse extends jspb.Message {
  getRecordsList(): Array<Resource>;
  setRecordsList(value: Array<Resource>): FetchResourcesByIdResponse;
  clearRecordsList(): FetchResourcesByIdResponse;
  addRecords(value?: Resource, index?: number): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchResourcesByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchResourcesByIdResponse): FetchResourcesByIdResponse.AsObject;
  static serializeBinaryToWriter(message: FetchResourcesByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchResourcesByIdResponse;
  static deserializeBinaryFromReader(message: FetchResourcesByIdResponse, reader: jspb.BinaryReader): FetchResourcesByIdResponse;
}

export namespace FetchResourcesByIdResponse {
  export type AsObject = {
    recordsList: Array<Resource.AsObject>,
  }
}

export class DeleteResourceRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteResourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResourceRequest): DeleteResourceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResourceRequest;
  static deserializeBinaryFromReader(message: DeleteResourceRequest, reader: jspb.BinaryReader): DeleteResourceRequest;
}

export namespace DeleteResourceRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteResourceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResourceResponse): DeleteResourceResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResourceResponse;
  static deserializeBinaryFromReader(message: DeleteResourceResponse, reader: jspb.BinaryReader): DeleteResourceResponse;
}

export namespace DeleteResourceResponse {
  export type AsObject = {
  }
}

