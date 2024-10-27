export const RESONITE_TYPE = {
  Slot: "FrooxEngine.Slot",
  User: "FrooxEngine.User",
  UserRoot: "FrooxEngine.UserRoot",
  FloatQ: "Elements.Core.floatQ",
  Float4: "Elements.Core.float4",
  Float3: "Elements.Core.float3",
  Float2: "Elements.Core.float2",
  DoubleQ: "Elements.Core.doubleQ",
  Double4: "Elements.Core.double4",
  Double3: "Elements.Core.double3",
  Double2: "Elements.Core.double2",
  IntQ: "Elements.Core.intQ",
  Int4: "Elements.Core.int4",
  Int3: "Elements.Core.int3",
  Int2: "Elements.Core.int2",
  ColorX: "Elements.Core.colorX",
  Color: "Elements.Core.color",
  String: "System.String",
  Int: "System.Int32",
  Boolean: "System.Boolean",
  Float: "System.Single",
  Double: "System.Double",
  Uri: "System.Uri",
  ISyncOperation: "ProtoFlux.Core.ISyncOperation",
  Continuation: "ProtoFlux.Core.Continuation",
  AsyncResumption: "ProtoFlux.Core.AsyncResumption",
  IAsyncOperation: "ProtoFlux.Core.IAsyncOperation",
  AsyncCall: "ProtoFlux.Core.AsyncCall",
  AuditClip: "FrooxEngine.IAssetProvider`1[FrooxEngine.AuditClip]",
  AvatarAnchor: "FrooxEngine.IAvatarAnchor",
  FingerPoseSource: "FrooxEngine.IFingerPoseSourceComponent",
  BodyNode: "FrooxEngine.BodyNode",
  Chirality: "FrooxEngine.Chirality",
  FingerType: "FrooxEngine.FingerType",
  FingerSegmentType: "FrooxEngine.FingerSegmentType",
  ColorProfile: "Elements.Core.ColorProfile",
  TimeSpan: "System.TimeSpan",
} as const;

export const RESONITE_FLOW_TYPES = [
  RESONITE_TYPE.ISyncOperation,
  RESONITE_TYPE.Continuation,
  RESONITE_TYPE.AsyncResumption,
  RESONITE_TYPE.IAsyncOperation,
  RESONITE_TYPE.AsyncCall,
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
  category: ResoniteNodeCategory["category"]
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
    input: ButtonConfig[];
    output: ButtonConfig[];
  }
>;
