import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../type";

const DataModelBooleanToggle: ResoniteNode = {
  label: "BooleanLatch",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DataModelBooleanToggle",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES],
  outputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Boolean],
};

const DelaySecondsDouble: ResoniteNode = {
  label: "Delay",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.DelaySecondsDouble",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Double],
  outputs: [...RESONITE_FLOW_TYPES],
};

const DelaySecondsFloat: ResoniteNode = {
  label: "Delay",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.DelaySecondsFloat",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Float],
  outputs: [...RESONITE_FLOW_TYPES],
};

const DelaySecondsInt: ResoniteNode = {
  label: "Delay",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.DelaySecondsInt",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int],
  outputs: [...RESONITE_FLOW_TYPES],
};

const DelayTimeSpan: ResoniteNode = {
  label: "Delay",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.DelayTimeSpan",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.TimeSpan],
  outputs: [...RESONITE_FLOW_TYPES],
};

const DelayWithDataSecondsDouble: ResoniteNode = {
  label: "DelayWithData",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.DelayWithValueSecondsDouble<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Double],
  outputs: [...RESONITE_FLOW_TYPES],
};

const DelayWithDataSecondsFloat: ResoniteNode = {
  label: "DelayWithData",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.DelayWithValueSecondsFloat<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Float],
  outputs: [...RESONITE_FLOW_TYPES],
};

const DynamicImpulseReceiver: ResoniteNode = {
  label: "DynamicImpulseReceiver",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Flow.DynamicImpulseReceiver",
  isGeneric: false,
  inputs: [],
  outputs: [...RESONITE_FLOW_TYPES],
};

export const Flow = packResoniteNodeCategory({
  DataModelBooleanToggle,
});
