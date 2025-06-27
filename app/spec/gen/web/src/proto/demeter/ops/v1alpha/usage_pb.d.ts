import * as jspb from 'google-protobuf'



export class UsageReport extends jspb.Message {
  getResourceId(): string;
  setResourceId(value: string): UsageReport;

  getResourceName(): string;
  setResourceName(value: string): UsageReport;

  getResourceKind(): string;
  setResourceKind(value: string): UsageReport;

  getResourceSpec(): string;
  setResourceSpec(value: string): UsageReport;

  getUnits(): number;
  setUnits(value: number): UsageReport;

  getTier(): string;
  setTier(value: string): UsageReport;

  getPeriod(): string;
  setPeriod(value: string): UsageReport;

  getUnitsCost(): number;
  setUnitsCost(value: number): UsageReport;
  hasUnitsCost(): boolean;
  clearUnitsCost(): UsageReport;

  getMinimumCost(): number;
  setMinimumCost(value: number): UsageReport;
  hasMinimumCost(): boolean;
  clearMinimumCost(): UsageReport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageReport.AsObject;
  static toObject(includeInstance: boolean, msg: UsageReport): UsageReport.AsObject;
  static serializeBinaryToWriter(message: UsageReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageReport;
  static deserializeBinaryFromReader(message: UsageReport, reader: jspb.BinaryReader): UsageReport;
}

export namespace UsageReport {
  export type AsObject = {
    resourceId: string,
    resourceName: string,
    resourceKind: string,
    resourceSpec: string,
    units: number,
    tier: string,
    period: string,
    unitsCost?: number,
    minimumCost?: number,
  }

  export enum UnitsCostCase { 
    _UNITS_COST_NOT_SET = 0,
    UNITS_COST = 9,
  }

  export enum MinimumCostCase { 
    _MINIMUM_COST_NOT_SET = 0,
    MINIMUM_COST = 10,
  }
}

export class FetchUsageReportRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): FetchUsageReportRequest;

  getPage(): number;
  setPage(value: number): FetchUsageReportRequest;
  hasPage(): boolean;
  clearPage(): FetchUsageReportRequest;

  getPageSize(): number;
  setPageSize(value: number): FetchUsageReportRequest;
  hasPageSize(): boolean;
  clearPageSize(): FetchUsageReportRequest;

  getClusterId(): string;
  setClusterId(value: string): FetchUsageReportRequest;
  hasClusterId(): boolean;
  clearClusterId(): FetchUsageReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchUsageReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchUsageReportRequest): FetchUsageReportRequest.AsObject;
  static serializeBinaryToWriter(message: FetchUsageReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchUsageReportRequest;
  static deserializeBinaryFromReader(message: FetchUsageReportRequest, reader: jspb.BinaryReader): FetchUsageReportRequest;
}

export namespace FetchUsageReportRequest {
  export type AsObject = {
    projectId: string,
    page?: number,
    pageSize?: number,
    clusterId?: string,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 2,
  }

  export enum PageSizeCase { 
    _PAGE_SIZE_NOT_SET = 0,
    PAGE_SIZE = 3,
  }

  export enum ClusterIdCase { 
    _CLUSTER_ID_NOT_SET = 0,
    CLUSTER_ID = 4,
  }
}

export class FetchUsageReportResponse extends jspb.Message {
  getRecordsList(): Array<UsageReport>;
  setRecordsList(value: Array<UsageReport>): FetchUsageReportResponse;
  clearRecordsList(): FetchUsageReportResponse;
  addRecords(value?: UsageReport, index?: number): UsageReport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchUsageReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchUsageReportResponse): FetchUsageReportResponse.AsObject;
  static serializeBinaryToWriter(message: FetchUsageReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchUsageReportResponse;
  static deserializeBinaryFromReader(message: FetchUsageReportResponse, reader: jspb.BinaryReader): FetchUsageReportResponse;
}

export namespace FetchUsageReportResponse {
  export type AsObject = {
    recordsList: Array<UsageReport.AsObject>,
  }
}

export class FetchUsageClusterRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): FetchUsageClusterRequest;

  getPage(): number;
  setPage(value: number): FetchUsageClusterRequest;
  hasPage(): boolean;
  clearPage(): FetchUsageClusterRequest;

  getPageSize(): number;
  setPageSize(value: number): FetchUsageClusterRequest;
  hasPageSize(): boolean;
  clearPageSize(): FetchUsageClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchUsageClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchUsageClusterRequest): FetchUsageClusterRequest.AsObject;
  static serializeBinaryToWriter(message: FetchUsageClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchUsageClusterRequest;
  static deserializeBinaryFromReader(message: FetchUsageClusterRequest, reader: jspb.BinaryReader): FetchUsageClusterRequest;
}

export namespace FetchUsageClusterRequest {
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

export class FetchUsageClusterResponse extends jspb.Message {
  getClustersList(): Array<string>;
  setClustersList(value: Array<string>): FetchUsageClusterResponse;
  clearClustersList(): FetchUsageClusterResponse;
  addClusters(value: string, index?: number): FetchUsageClusterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchUsageClusterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchUsageClusterResponse): FetchUsageClusterResponse.AsObject;
  static serializeBinaryToWriter(message: FetchUsageClusterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchUsageClusterResponse;
  static deserializeBinaryFromReader(message: FetchUsageClusterResponse, reader: jspb.BinaryReader): FetchUsageClusterResponse;
}

export namespace FetchUsageClusterResponse {
  export type AsObject = {
    clustersList: Array<string>,
  }
}

