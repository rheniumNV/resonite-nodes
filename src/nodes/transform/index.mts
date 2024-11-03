import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../type.mjs";

const GlobalTransform: ResoniteNode = {
  label: "GlobalTransform",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.GlobalTransform",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.Float3, RESONITE_TYPE.FloatQ],
};

const LocalTransform: ResoniteNode = {
  label: "LocalTransform",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.LocalTransform",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.Float3, RESONITE_TYPE.FloatQ],
};

const SetGlobalPosition: ResoniteNode = {
  label: "SetGlobalPosition",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalPosition",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.Float3],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SetGlobalPositionRotation: ResoniteNode = {
  label: "SetGlobalPositionRotation",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalPositionRotation",
  isGeneric: false,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Slot,
    RESONITE_TYPE.Float3,
    RESONITE_TYPE.FloatQ,
  ],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SetGlobalRotation: ResoniteNode = {
  label: "SetGlobalRotation",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalRotation",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.FloatQ],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SetGlobalScale: ResoniteNode = {
  label: "SetGlobalScale",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalScale",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.Float3],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SetGlobalTransform: ResoniteNode = {
  label: "SetGlobalTransform",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalTransform",
  isGeneric: false,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Slot,
    RESONITE_TYPE.Float3,
    RESONITE_TYPE.FloatQ,
    RESONITE_TYPE.Float3,
  ],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SetGlobalTransformMatrix: ResoniteNode = {
  label: "SetGlobalTransformMatrix",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalTransformMatrix",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.Float4x4],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SetLocalPosition: ResoniteNode = {
  label: "SetLocalPosition",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalPosition",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.Float3],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SetLocalPositionRotation: ResoniteNode = {
  label: "SetLocalPositionRotation",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalPositionRotation",
  isGeneric: false,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Slot,
    RESONITE_TYPE.Float3,
    RESONITE_TYPE.FloatQ,
  ],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SetLocalRotation: ResoniteNode = {
  label: "SetLocalRotation",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalRotation",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.FloatQ],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SetLocalScale: ResoniteNode = {
  label: "SetLocalScale",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalScale",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.Float3],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SetLocalTransform: ResoniteNode = {
  label: "SetLocalTransform",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalTransform",
  isGeneric: false,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Slot,
    RESONITE_TYPE.Float3,
    RESONITE_TYPE.FloatQ,
    RESONITE_TYPE.Float3,
  ],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SetTRS: ResoniteNode = {
  label: "SetTRS",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalTransformMatrix",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.Float4x4],
  outputs: [...RESONITE_FLOW_TYPES],
};

export const Transforms = packResoniteNodeCategory({
  GlobalTransform,
  LocalTransform,
  SetGlobalPosition,
  SetGlobalPositionRotation,
  SetGlobalRotation,
  SetGlobalScale,
  SetGlobalTransform,
  SetGlobalTransformMatrix,
  SetLocalPosition,
  SetLocalPositionRotation,
  SetLocalRotation,
  SetLocalScale,
  SetLocalTransform,
  SetTRS,
});
