import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_OBJECT_TYPES,
  RESONITE_TYPE,
  RESONITE_VALUE_TYPES,
  ResoniteNode,
} from "../../../../type.mjs";

const DelayUpdatesOrTimeWithObjectSecondsDouble: ResoniteNode = {
  label: "DelayUpdatesOrTimeWithObjectSecondsDouble",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrTimeWithObjectSecondsDouble<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_OBJECT_TYPES,
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Double,
  ],
  outputs: [...RESONITE_OBJECT_TYPES, ...RESONITE_FLOW_TYPES],
};

const DelayUpdatesOrTimeWithObjectSecondsFloat: ResoniteNode = {
  label: "DelayUpdatesOrTimeWithObjectSecondsFloat",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrTimeWithObjectSecondsFloat<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_OBJECT_TYPES,
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Float,
  ],
  outputs: [...RESONITE_OBJECT_TYPES, ...RESONITE_FLOW_TYPES],
};

const DelayUpdatesOrTimeWithObjectSecondsInt: ResoniteNode = {
  label: "DelayUpdatesOrTimeWithObjectSecondsInt",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrTimeWithObjectSecondsInt<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_OBJECT_TYPES, ...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int],
  outputs: [...RESONITE_OBJECT_TYPES, ...RESONITE_FLOW_TYPES],
};

const DelayUpdatesOrTimeWithObjectTimeSpan: ResoniteNode = {
  label: "DelayUpdatesOrTimeWithObjectTimeSpan",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrTimeWithObjectTimeSpan<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_OBJECT_TYPES,
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.TimeSpan,
  ],
  outputs: [...RESONITE_OBJECT_TYPES, ...RESONITE_FLOW_TYPES],
};

const UpdatesOrTimeDelayWithValueSecondsDouble: ResoniteNode = {
  label: "UpdatesOrTimeDelayWithValueSecondsDouble",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.UpdatesOrTimeDelayWithValueSecondsDouble<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_VALUE_TYPES,
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Double,
  ],
  outputs: [...RESONITE_VALUE_TYPES, ...RESONITE_FLOW_TYPES],
};

const UpdatesOrTimeDelayWithValueSecondsFloat: ResoniteNode = {
  label: "UpdatesOrTimeDelayWithValueSecondsFloat",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.UpdatesOrTimeDelayWithValueSecondsFloat<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_VALUE_TYPES,
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Float,
  ],
  outputs: [...RESONITE_VALUE_TYPES, ...RESONITE_FLOW_TYPES],
};

const UpdatesOrTimeDelayWithValueSecondsInt: ResoniteNode = {
  label: "UpdatesOrTimeDelayWithValueSecondsInt",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.UpdatesOrTimeDelayWithValueSecondsInt<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES, ...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int],
  outputs: [...RESONITE_VALUE_TYPES, ...RESONITE_FLOW_TYPES],
};

const UpdatesOrTimeDelayWithValueTimeSpan: ResoniteNode = {
  label: "UpdatesOrTimeDelayWithValueTimeSpan",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.UpdatesOrTimeDelayWithValueTimeSpan<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_VALUE_TYPES,
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.TimeSpan,
  ],
  outputs: [...RESONITE_VALUE_TYPES, ...RESONITE_FLOW_TYPES],
};

export const UpdatesOrTimeDelayWithData = packResoniteNodeCategory({
  DelayUpdatesOrTimeWithObjectSecondsDouble,
  DelayUpdatesOrTimeWithObjectSecondsFloat,
  DelayUpdatesOrTimeWithObjectSecondsInt,
  DelayUpdatesOrTimeWithObjectTimeSpan,
  UpdatesOrTimeDelayWithValueSecondsDouble,
  UpdatesOrTimeDelayWithValueSecondsFloat,
  UpdatesOrTimeDelayWithValueSecondsInt,
  UpdatesOrTimeDelayWithValueTimeSpan,
});
