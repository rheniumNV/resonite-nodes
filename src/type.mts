const RESONITE_TMP_TYPE = {} as const;

const RESONITE_ON_REFERENCE_OBJECT_TYPE = {
  String: "System.String",
  Uri: "System.Uri",
} as const;

const RESONITE_REFERENCE_TYPE = {
  Slot: "FrooxEngine.Slot",
  User: "FrooxEngine.User",
  UserRoot: "FrooxEngine.UserRoot",
  AuditClip: "FrooxEngine.IAssetProvider`1[FrooxEngine.AuditClip]",
  AvatarAnchor: "FrooxEngine.IAvatarAnchor",
  FingerPoseSource: "FrooxEngine.IFingerPoseSourceComponent",
  IComponent: "FrooxEngine.IComponent",
} as const;

const RESONITE_OBJECT_TYPE = {
  ...RESONITE_ON_REFERENCE_OBJECT_TYPE,
  ...RESONITE_REFERENCE_TYPE,
};

const RESONITE_VALUE_TYPE = {
  FloatQ: "Elements.Core.floatQ",
  Float4: "Elements.Core.float4",
  Float3: "Elements.Core.float3",
  Float2: "Elements.Core.float2",
  Float: "System.Single",
  DoubleQ: "Elements.Core.doubleQ",
  Double4: "Elements.Core.double4",
  Double3: "Elements.Core.double3",
  Double2: "Elements.Core.double2",
  Double: "System.Double",
  Int4: "Elements.Core.int4",
  Int3: "Elements.Core.int3",
  Int2: "Elements.Core.int2",
  Int: "System.Int32",
  Byte: "System.Byte",
  UShort: "System.UInt16",
  UInt4: "Elements.Core.uint4",
  UInt3: "Elements.Core.uint3",
  UInt2: "Elements.Core.uint2",
  UInt: "System.UInt32",
  ULong4: "Elements.Core.ulong4",
  ULong3: "Elements.Core.ulong3",
  ULong2: "Elements.Core.ulong2",
  ULong: "System.UInt64",
  SByte: "System.SByte",
  Short: "System.Int16",
  Long4: "Elements.Core.long4",
  Long3: "Elements.Core.long3",
  Long2: "Elements.Core.long2",
  Long: "System.Int64",
  Decimal: "System.Decimal",
  Char: "System.Char",
  Bool4: "Elements.Core.bool4",
  Bool3: "Elements.Core.bool3",
  Bool2: "Elements.Core.bool2",
  Bool: "System.Boolean",
  Float2x2: "Elements.Core.float2x2",
  Float3x3: "Elements.Core.float3x3",
  Float4x4: "Elements.Core.float4x4",
  Double2x2: "Elements.Core.double2x2",
  Double3x3: "Elements.Core.double3x3",
  Double4x4: "Elements.Core.double4x4",
  ColorX: "Elements.Core.colorX",
  Color: "Elements.Core.color",
  ColorProfile: "Elements.Core.ColorProfile",
  TimeSpan: "System.TimeSpan",
  DateTime: "System.DateTime",
  ShadowCastMode: "FrooxEngine.ShadowCastMode",
  LightType: "FrooxEngine.LightType",
  SessionAccessLevel: "FrooxEngine.SessionAccessLevel",
  Key: "FrooxEngine.Key",
  HttpStatusCode: "System.Net.HttpStatusCode",
  HeadOutputDevice: "FrooxEngine.HeadOutputDevice",
  "ReflectionProbe+Clear": "FrooxEngine.ReflectionProbe+Clear",
  "ReflectionProbe+Type": "FrooxEngine.ReflectionProbe+Type",
  "ReflectionProbe+TimeSlicingMode":
    "FrooxEngine.ReflectionProbe+TimeSlicingMode",
  CameraClearMode: "FrooxEngine.CameraClearMode",
  CameraPositioningMode: "FrooxEngine.CameraPositioningMode",
  CameraProjection: "FrooxEngine.CameraProjection",
  ZWrite: "FrooxEngine.ZWrite",
  ZTest: "FrooxEngine.ZTest",
  Blend: "FrooxEngine.Blend",
  BlendMode: "FrooxEngine.BlendMode",
  Culling: "FrooxEngine.Culling",
  BodyNode: "FrooxEngine.BodyNode",
  Chirality: "FrooxEngine.Chirality",
  DummyEnum: "Elements.Core.DummyEnum",
  FingerSegmentType: "FrooxEngine.FingerSegmentType",
  FingerType: "FrooxEngine.FingerType",
} as const;

const RESONITE_FLOW_TYPE = {
  Call: "ProtoFlux.Core.Call",
  ISyncOperation: "ProtoFlux.Core.ISyncOperation",
  Continuation: "ProtoFlux.Core.Continuation",
  AsyncResumption: "ProtoFlux.Core.AsyncResumption",
  IAsyncOperation: "ProtoFlux.Core.IAsyncOperation",
  AsyncCall: "ProtoFlux.Core.AsyncCall",
} as const;

export const RESONITE_TYPE = {
  ...RESONITE_TMP_TYPE,
  ...RESONITE_OBJECT_TYPE,
  ...RESONITE_VALUE_TYPE,
  ...RESONITE_FLOW_TYPE,
} as const;

export const RESONITE_FLOW_TYPES = Object.values(RESONITE_FLOW_TYPE);

export const RESONITE_VALUE_TYPES = Object.values(RESONITE_VALUE_TYPE);

export const RESONITE_NON_REFERENCE_OBJECT_TYPES = Object.values(
  RESONITE_ON_REFERENCE_OBJECT_TYPE,
);

export const RESONITE_REFERENCE_TYPES = Object.values(RESONITE_REFERENCE_TYPE);

export const RESONITE_OBJECT_TYPES = [
  ...RESONITE_REFERENCE_TYPES,
  ...RESONITE_NON_REFERENCE_OBJECT_TYPES,
];

export type ResoniteType = (typeof RESONITE_TYPE)[keyof typeof RESONITE_TYPE];

export type ResoniteNodeType = string;

export type ResoniteNode =
  | {
      label: string;
      type: string;
      isGeneric: false;
      inputs: ResoniteType[];
      outputs: ResoniteType[];
    }
  | {
      label: string;
      type: (i: string) => string;
      isGeneric: true;
      inputs: ResoniteType[];
      outputs: ResoniteType[];
    };

export type ResoniteNodeCategory = {
  category: { [key: string]: ResoniteNode | ResoniteNodeCategory };
};

export const packResoniteNodeCategory = (
  category: ResoniteNodeCategory["category"],
): ResoniteNodeCategory => {
  return { category };
};

export type NodeButtonConfig = {
  type: "simpleNode";
  label: string;
  value: ResoniteNodeType;
};

export type DirectoryButtonConfig = {
  type: "directory";
  label: string;
  children: ButtonConfig[];
};

export type ButtonConfig = NodeButtonConfig | DirectoryButtonConfig;

export type TypeConfig = Record<
  string,
  {
    input: {
      defaultCategory: number;
      categories: { key: string; children: ButtonConfig[] }[];
    };
    output: {
      defaultCategory: number;
      categories: { key: string; children: ButtonConfig[] }[];
    };
  }
>;
