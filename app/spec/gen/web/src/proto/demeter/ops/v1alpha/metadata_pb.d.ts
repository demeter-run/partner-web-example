import * as jspb from 'google-protobuf'



export class Metadata extends jspb.Message {
  getOptions(): string;
  setOptions(value: string): Metadata;

  getCrd(): string;
  setCrd(value: string): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    options: string,
    crd: string,
  }
}

export class FetchMetadataRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchMetadataRequest): FetchMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: FetchMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchMetadataRequest;
  static deserializeBinaryFromReader(message: FetchMetadataRequest, reader: jspb.BinaryReader): FetchMetadataRequest;
}

export namespace FetchMetadataRequest {
  export type AsObject = {
  }
}

export class FetchMetadataResponse extends jspb.Message {
  getRecordsList(): Array<Metadata>;
  setRecordsList(value: Array<Metadata>): FetchMetadataResponse;
  clearRecordsList(): FetchMetadataResponse;
  addRecords(value?: Metadata, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchMetadataResponse): FetchMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: FetchMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchMetadataResponse;
  static deserializeBinaryFromReader(message: FetchMetadataResponse, reader: jspb.BinaryReader): FetchMetadataResponse;
}

export namespace FetchMetadataResponse {
  export type AsObject = {
    recordsList: Array<Metadata.AsObject>,
  }
}

