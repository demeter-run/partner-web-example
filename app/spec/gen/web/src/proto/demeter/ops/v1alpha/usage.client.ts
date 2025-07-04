// @generated by protobuf-ts 2.11.1
// @generated from protobuf file "proto/demeter/ops/v1alpha/usage.proto" (package "demeter.ops.v1alpha", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { UsageService } from "./usage";
import type { FetchUsageClusterResponse } from "./usage";
import type { FetchUsageClusterRequest } from "./usage";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { FetchUsageReportResponse } from "./usage";
import type { FetchUsageReportRequest } from "./usage";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service demeter.ops.v1alpha.UsageService
 */
export interface IUsageServiceClient {
    /**
     * @generated from protobuf rpc: FetchUsageReport
     */
    fetchUsageReport(input: FetchUsageReportRequest, options?: RpcOptions): UnaryCall<FetchUsageReportRequest, FetchUsageReportResponse>;
    /**
     * @generated from protobuf rpc: FetchUsageCluster
     */
    fetchUsageCluster(input: FetchUsageClusterRequest, options?: RpcOptions): UnaryCall<FetchUsageClusterRequest, FetchUsageClusterResponse>;
}
/**
 * @generated from protobuf service demeter.ops.v1alpha.UsageService
 */
export class UsageServiceClient implements IUsageServiceClient, ServiceInfo {
    typeName = UsageService.typeName;
    methods = UsageService.methods;
    options = UsageService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: FetchUsageReport
     */
    fetchUsageReport(input: FetchUsageReportRequest, options?: RpcOptions): UnaryCall<FetchUsageReportRequest, FetchUsageReportResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<FetchUsageReportRequest, FetchUsageReportResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: FetchUsageCluster
     */
    fetchUsageCluster(input: FetchUsageClusterRequest, options?: RpcOptions): UnaryCall<FetchUsageClusterRequest, FetchUsageClusterResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<FetchUsageClusterRequest, FetchUsageClusterResponse>("unary", this._transport, method, opt, input);
    }
}
