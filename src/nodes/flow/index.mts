import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_NON_REFERENCE_OBJECT_TYPES,
  RESONITE_OBJECT_TYPES,
  RESONITE_REFERENCE_TYPES,
  RESONITE_TYPE,
  RESONITE_VALUE_TYPES,
  ResoniteNode,
} from "../../type.mjs";
import { Async } from "./async/index.mjs";
import { Events } from "./events/index.mjs";

const DataModelBooleanToggle: ResoniteNode = {
  label: "BooleanLatch",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DataModelBooleanToggle",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES],
  outputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Bool],
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

const DynamicImpulseReceiverWithValue: ResoniteNode = {
  label: "DynamicImpulseReceiverWithValue",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseReceiverWithValue<${i}>`,
  isGeneric: true,
  inputs: [],
  outputs: [...RESONITE_FLOW_TYPES, ...RESONITE_VALUE_TYPES],
};

const DynamicImpulseReceiverWithObject: ResoniteNode = {
  label: "DynamicImpulseReceiverWithObject",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseReceiverWithObject<${i}>`,
  isGeneric: true,
  inputs: [],
  outputs: [...RESONITE_FLOW_TYPES, ...RESONITE_OBJECT_TYPES],
};

const DynamicImpulseTrigger: ResoniteNode = {
  label: "DynamicImpulseTrigger",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseTrigger",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.String, RESONITE_TYPE.Slot],
  outputs: [],
};

const DynamicImpulseTriggerWithValue: ResoniteNode = {
  label: "DynamicImpulseTriggerWithValue",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseTriggerWithValue<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.String,
    RESONITE_TYPE.Slot,
    ...RESONITE_VALUE_TYPES,
  ],
  outputs: [...RESONITE_FLOW_TYPES],
};

const DynamicImpulseTriggerWithObject: ResoniteNode = {
  label: "DynamicImpulseTriggerWithObject",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseTriggerWithObject<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.String,
    RESONITE_TYPE.Slot,
    ...RESONITE_OBJECT_TYPES,
  ],
  outputs: [...RESONITE_FLOW_TYPES],
};

const FireOnValueChange: ResoniteNode = {
  label: "FireOnChange",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnValueChange<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES, RESONITE_TYPE.User],
  outputs: [...RESONITE_FLOW_TYPES],
};

const FireOnObjectChange: ResoniteNode = {
  label: "FireOnChange",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnObjectChange<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_NON_REFERENCE_OBJECT_TYPES, RESONITE_TYPE.User],
  outputs: [...RESONITE_FLOW_TYPES],
};

const FireOnRefChange: ResoniteNode = {
  label: "FireOnChange",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnRefChange<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_REFERENCE_TYPES, RESONITE_TYPE.User],
  outputs: [...RESONITE_FLOW_TYPES],
};

const FireOnFalse: ResoniteNode = {
  label: "FireOnFalse",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnFalse",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Bool],
  outputs: [...RESONITE_FLOW_TYPES],
};

const FireOnLocalChange: ResoniteNode = {
  label: "FireOnLocalChange",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalChange<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_OBJECT_TYPES, ...RESONITE_VALUE_TYPES],
  outputs: [...RESONITE_FLOW_TYPES],
};

const FireOnLocalFalse: ResoniteNode = {
  label: "FireOnLocalFalse",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalFalse",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Bool],
  outputs: [...RESONITE_FLOW_TYPES],
};

const FireOnLocalTrue: ResoniteNode = {
  label: "FireOnLocalTrue",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalTrue",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Bool],
  outputs: [...RESONITE_FLOW_TYPES],
};

const FireOnTrue: ResoniteNode = {
  label: "FireOnTrue",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnTrue",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Bool],
  outputs: [...RESONITE_FLOW_TYPES],
};

const FireWhileTrue: ResoniteNode = {
  label: "FireWhileTrue",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.FireWhileTrue",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Bool],
  outputs: [...RESONITE_FLOW_TYPES],
};

const For: ResoniteNode = {
  label: "For",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.For",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int],
  outputs: [...RESONITE_FLOW_TYPES],
};

const If: ResoniteNode = {
  label: "If",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.If",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Bool, ...RESONITE_FLOW_TYPES],
  outputs: [...RESONITE_FLOW_TYPES],
};

const ImpulseDemultiplexer: ResoniteNode = {
  label: "ImpulseDemultiplexer",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.ImpulseDemultiplexer",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES],
  outputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int],
};

const ImpulseMultiplexer: ResoniteNode = {
  label: "ImpulseMultiplexer",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.ImpulseMultiplexer",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int],
  outputs: [...RESONITE_FLOW_TYPES],
};

const LocalFireWhileTrue: ResoniteNode = {
  label: "LocalFireWhileTrue",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.LocalFireWhileTrue",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Bool],
  outputs: [...RESONITE_FLOW_TYPES],
};

const LocalImpulseTimeoutSeconds: ResoniteNode = {
  label: "LocalImpulseTimeout",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalImpulseTimeoutSeconds",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Float],
  outputs: [...RESONITE_FLOW_TYPES],
};

const LocalImpulseTimeoutTimeSpan: ResoniteNode = {
  label: "LocalImpulseTimeout",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalImpulseTimeoutTimeSpan",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.TimeSpan],
  outputs: [...RESONITE_FLOW_TYPES],
};

const LocalLeakyImpulseBucket: ResoniteNode = {
  label: "LocalLeakyImpulseBucket",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalLeakyImpulseBucket",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Float, RESONITE_TYPE.Int],
  outputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int],
};

const LocalUpdate: ResoniteNode = {
  label: "LocalUpdate",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalUpdate",
  isGeneric: false,
  inputs: [],
  outputs: [...RESONITE_FLOW_TYPES],
};

const OnePerFrame: ResoniteNode = {
  label: "OnePerFrame",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.OnePerFrame",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES],
  outputs: [...RESONITE_FLOW_TYPES],
};

const PulseRandom: ResoniteNode = {
  label: "PulseRandom",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.PulseRandom",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES],
  outputs: [...RESONITE_FLOW_TYPES],
};

const RangeLoop: ResoniteNode = {
  label: "RangeLoop",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.RangeLoopInt",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int],
  outputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int],
};

const SecondsTimer: ResoniteNode = {
  label: "SecondsTimer",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.SecondsTimer",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float, RESONITE_TYPE.User],
  outputs: [...RESONITE_FLOW_TYPES],
};

const Sequence: ResoniteNode = {
  label: "Sequence",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Sequence",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES],
  outputs: [...RESONITE_FLOW_TYPES],
};

const Update: ResoniteNode = {
  label: "Update",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.Update",
  isGeneric: false,
  inputs: [RESONITE_TYPE.User],
  outputs: [...RESONITE_FLOW_TYPES],
};

const UpdatesTimer: ResoniteNode = {
  label: "UpdatesTimer",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.UpdatesTimer",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Int, RESONITE_TYPE.User],
  outputs: [...RESONITE_FLOW_TYPES],
};

const While: ResoniteNode = {
  label: "While",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.While",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Bool, ...RESONITE_FLOW_TYPES],
  outputs: [...RESONITE_FLOW_TYPES],
};

export const Flow = packResoniteNodeCategory({
  Async,
  Events,
  DataModelBooleanToggle,
  DelaySecondsDouble,
  DelaySecondsFloat,
  DelaySecondsInt,
  DelayTimeSpan,
  DelayWithDataSecondsDouble,
  DelayWithDataSecondsFloat,
  DynamicImpulseReceiver,
  DynamicImpulseReceiverWithValue,
  DynamicImpulseReceiverWithObject,
  DynamicImpulseTrigger,
  DynamicImpulseTriggerWithValue,
  DynamicImpulseTriggerWithObject,
  FireOnValueChange,
  FireOnObjectChange,
  FireOnRefChange,
  FireOnFalse,
  FireOnLocalChange,
  FireOnLocalFalse,
  FireOnLocalTrue,
  FireOnTrue,
  FireWhileTrue,
  For,
  If,
  ImpulseDemultiplexer,
  ImpulseMultiplexer,
  LocalFireWhileTrue,
  LocalImpulseTimeoutSeconds,
  LocalImpulseTimeoutTimeSpan,
  LocalLeakyImpulseBucket,
  LocalUpdate,
  OnePerFrame,
  PulseRandom,
  RangeLoop,
  SecondsTimer,
  Sequence,
  Update,
  UpdatesTimer,
  While,
});
