import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_OBJECT_TYPES,
  RESONITE_VALUE_TYPES,
  ResoniteNode,
} from "../../type.mjs";

const ValueDecrement: ResoniteNode = {
  label: "ValueDecrement",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.ValueDecrement<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES, ...RESONITE_FLOW_TYPES],
  outputs: [],
};

const ValueIncrement: ResoniteNode = {
  label: "ValueIncrement",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.ValueIncrement<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES, ...RESONITE_FLOW_TYPES],
  outputs: [],
};

const ValueWrite: ResoniteNode = {
  label: "Write",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.ValueWrite<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [],
};

const ObjectWrite: ResoniteNode = {
  label: "Write",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.ObjectWrite<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_OBJECT_TYPES, ...RESONITE_FLOW_TYPES],
  outputs: [],
};

export const Actions = packResoniteNodeCategory({
  ValueDecrement,
  ValueIncrement,
  ValueWrite,
  ObjectWrite,
});
