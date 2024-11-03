import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_OBJECT_TYPES,
  RESONITE_TYPE,
  RESONITE_VALUE_TYPES,
  ResoniteNode,
} from "../../../type.mjs";
import { UpdatesOrTimeDelay } from "./updatesOrTimeDelay/index.mjs";
import { UpdatesOrTimeDelayWithData } from "./updatesOrTimeDelayWithData/index.mjs";

const AsyncDynamicImpulseReceiver: ResoniteNode = {
  label: "Async Dynamic Impulse Receiver",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseReceiver",
  isGeneric: false,
  inputs: [],
  outputs: [...RESONITE_FLOW_TYPES],
};

const AsyncDynamicImpulseReceiverWithObject: ResoniteNode = {
  label: "AsyncDynamicImpulseReceiverWithObject",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseReceiverWithObject<${i}>`,
  isGeneric: true,
  inputs: [],
  outputs: [...RESONITE_FLOW_TYPES, ...RESONITE_OBJECT_TYPES],
};

const AsyncDynamicImpulseReceiverWithValue: ResoniteNode = {
  label: "AsyncDynamicImpulseReceiverWithValue",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseReceiverWithValue<${i}>`,
  isGeneric: true,
  inputs: [],
  outputs: [...RESONITE_FLOW_TYPES, ...RESONITE_VALUE_TYPES],
};

const AsyncDynamicImpulseTrigger: ResoniteNode = {
  label: "AsyncDynamicImpulseTrigger",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseTrigger",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES],
  outputs: [],
};

const AsyncDynamicImpulseTriggerWithObject: ResoniteNode = {
  label: "AsyncDynamicImpulseTriggerWithObject",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseTriggerWithObject<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    ...RESONITE_OBJECT_TYPES,
    RESONITE_TYPE.Slot,
  ],
  outputs: [],
};

const AsyncDynamicImpulseTriggerWithValue: ResoniteNode = {
  label: "AsyncDynamicImpulseTriggerWithValue",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseTriggerWithValue<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_FLOW_TYPES, ...RESONITE_VALUE_TYPES, RESONITE_TYPE.Slot],
  outputs: [],
};

const AsyncFor: ResoniteNode = {
  label: "AsyncFor",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.AsyncFor",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int],
  outputs: [...RESONITE_FLOW_TYPES],
};

const AsyncRangeLoop: ResoniteNode = {
  label: "AsyncRangeLoop",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.AsyncRangeLoop",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int],
  outputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int],
};

const AsyncSequence: ResoniteNode = {
  label: "AsyncSequence",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.AsyncSequence",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES],
  outputs: [...RESONITE_FLOW_TYPES],
};

const AsyncWhile: ResoniteNode = {
  label: "AsyncWhile",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.AsyncWhile",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Bool],
  outputs: [...RESONITE_FLOW_TYPES],
};

const DelayUpdates: ResoniteNode = {
  label: "DelayUpdates",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdates",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int],
  outputs: [...RESONITE_FLOW_TYPES],
};

const StartAsyncTask: ResoniteNode = {
  label: "StartAsyncTask",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.StartAsyncTask",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES],
  outputs: [...RESONITE_FLOW_TYPES],
};

const UpdatesDelayWithValue: ResoniteNode = {
  label: "UpdatesDelayWithValue",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.UpdatesDelayWithValue<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int, ...RESONITE_VALUE_TYPES],
  outputs: [...RESONITE_FLOW_TYPES],
};

const UpdatesDelayWithObject: ResoniteNode = {
  label: "UpdatesDelayWithObject",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.UpdatesDelayWithObject<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int, ...RESONITE_OBJECT_TYPES],
  outputs: [...RESONITE_FLOW_TYPES],
};

export const Async = packResoniteNodeCategory({
  AsyncDynamicImpulseReceiver,
  AsyncDynamicImpulseReceiverWithObject,
  AsyncDynamicImpulseReceiverWithValue,
  AsyncDynamicImpulseTrigger,
  AsyncDynamicImpulseTriggerWithObject,
  AsyncDynamicImpulseTriggerWithValue,
  AsyncFor,
  AsyncRangeLoop,
  AsyncSequence,
  AsyncWhile,
  DelayUpdates,
  StartAsyncTask,
  UpdatesDelayWithValue,
  UpdatesDelayWithObject,
  UpdatesOrTimeDelay,
  UpdatesOrTimeDelayWithData,
});
