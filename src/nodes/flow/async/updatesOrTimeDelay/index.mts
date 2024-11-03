import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../../../type.mjs";

const DelayUpdatesOrSecondsDouble: ResoniteNode = {
  label: "DelayUpdatesOrSecondsDouble",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrSecondsDouble",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Double, RESONITE_TYPE.Int],
  outputs: [...RESONITE_FLOW_TYPES],
};

const DelayUpdatesOrSecondsFloat: ResoniteNode = {
  label: "DelayUpdatesOrSecondsFloat",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrSecondsFloat",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Float, RESONITE_TYPE.Int],
  outputs: [...RESONITE_FLOW_TYPES],
};

const DelayUpdatesOrSecondsInt: ResoniteNode = {
  label: "DelayUpdatesOrSecondsInt",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrSecondsInt",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int, RESONITE_TYPE.Int],
  outputs: [...RESONITE_FLOW_TYPES],
};

const DelayUpdatesOrTimeSpan: ResoniteNode = {
  label: "DelayUpdatesOrTimeSpan",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrTimeSpan",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.TimeSpan, RESONITE_TYPE.Int],
  outputs: [...RESONITE_FLOW_TYPES],
};

export const UpdatesOrTimeDelay = packResoniteNodeCategory({
  DelayUpdatesOrSecondsDouble,
  DelayUpdatesOrSecondsFloat,
  DelayUpdatesOrSecondsInt,
  DelayUpdatesOrTimeSpan,
});
