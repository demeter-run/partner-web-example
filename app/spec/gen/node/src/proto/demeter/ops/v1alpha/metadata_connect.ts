// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file proto/demeter/ops/v1alpha/metadata.proto (package demeter.ops.v1alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FetchMetadataRequest, FetchMetadataResponse } from "./metadata_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service demeter.ops.v1alpha.MetadataService
 */
export const MetadataService = {
  typeName: "demeter.ops.v1alpha.MetadataService",
  methods: {
    /**
     * @generated from rpc demeter.ops.v1alpha.MetadataService.FetchMetadata
     */
    fetchMetadata: {
      name: "FetchMetadata",
      I: FetchMetadataRequest,
      O: FetchMetadataResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

