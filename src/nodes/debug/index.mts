import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../type.mjs";

const DebugAxes: ResoniteNode = {
  label: "DebugAxes",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Debugging.DebugAxes",
  isGeneric: false,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Float3,
    RESONITE_TYPE.FloatQ,
    RESONITE_TYPE.Float,
    RESONITE_TYPE.ColorX,
  ],
  outputs: [],
};

const DebugBox: ResoniteNode = {
  label: "DebugBox",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Debugging.DebugBox",
  isGeneric: false,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Float3,
    RESONITE_TYPE.FloatQ,
    RESONITE_TYPE.ColorX,
  ],
  outputs: [],
};

const DebugLine: ResoniteNode = {
  label: "DebugLine",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Debugging.DebugLine",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Float3, RESONITE_TYPE.ColorX],
  outputs: [],
};

const DebugSphere: ResoniteNode = {
  label: "DebugSphere",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Debugging.DebugSphere",
  isGeneric: false,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Float3,
    RESONITE_TYPE.Float,
    RESONITE_TYPE.ColorX,
  ],
  outputs: [],
};

const DebugText: ResoniteNode = {
  label: "DebugText",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Debugging.DebugText",
  isGeneric: false,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.String,
    RESONITE_TYPE.Float3,
    RESONITE_TYPE.Float,
    RESONITE_TYPE.ColorX,
  ],
  outputs: [],
};

const DebugTriangle: ResoniteNode = {
  label: "DebugTriangle",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Debugging.DebugTriangle",
  isGeneric: false,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Float3,
    RESONITE_TYPE.ColorX,
    RESONITE_TYPE.Float,
  ],
  outputs: [],
};

const DebugVector: ResoniteNode = {
  label: "DebugVector",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Debugging.DebugVector",
  isGeneric: false,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Float3,
    RESONITE_TYPE.ColorX,
    RESONITE_TYPE.Float,
  ],
  outputs: [],
};

const EstimatedMasterClockError: ResoniteNode = {
  label: "EstimatedMasterClockError",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Debugging.EstimatedMasterClockError",
  isGeneric: false,
  inputs: [],
  outputs: [RESONITE_TYPE.Float],
};

export const Debug = packResoniteNodeCategory({
  DebugAxes,
  DebugBox,
  DebugLine,
  DebugSphere,
  DebugText,
  DebugTriangle,
  DebugVector,
  EstimatedMasterClockError,
});
