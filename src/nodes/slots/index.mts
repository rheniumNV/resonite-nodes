import { Info } from "./info/index.mjs";
import { Searching } from "./searching/index.mjs";
import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_REFERENCE_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../type.mjs";

const ChildrenCount: ResoniteNode = {
  label: "ChildrenCount",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.ChildrenCount",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.Int],
};

const DestroySlot: ResoniteNode = {
  label: "DestroySlot",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.DestroySlot",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot],
  outputs: [...RESONITE_FLOW_TYPES],
};

const DestroySlotChildren: ResoniteNode = {
  label: "DestroySlotChildren",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.DestroySlotChildren",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot],
  outputs: [...RESONITE_FLOW_TYPES],
};

const DuplicateSlot: ResoniteNode = {
  label: "DuplicateSlot",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.DuplicateSlot",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot],
  outputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot],
};

const GetActiveUser: ResoniteNode = {
  label: "GetActiveUser",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetActiveUser",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.User],
};

const GetActiveUserRoot: ResoniteNode = {
  label: "GetActiveUserRoot",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetActiveUserRoot",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.UserRoot],
};

const GetActiveUserSelf: ResoniteNode = {
  label: "GetActiveUserSelf",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetActiveUserSelf",
  isGeneric: false,
  inputs: [],
  outputs: [RESONITE_TYPE.User],
};

const GetChild: ResoniteNode = {
  label: "GetChild",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetChild",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot, RESONITE_TYPE.Int],
  outputs: [RESONITE_TYPE.Slot],
};

const GetObjectRoot: ResoniteNode = {
  label: "GetObjectRoot",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetObjectRoot",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.Slot],
};

const GetParentSlot: ResoniteNode = {
  label: "GetParentSlot",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetParentSlot",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.Slot],
};

const GetSlot: ResoniteNode = {
  label: "GetSlot",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetSlot",
  isGeneric: false,
  inputs: [...RESONITE_REFERENCE_TYPES],
  outputs: [RESONITE_TYPE.Slot],
};

const GetSlotOrderOffset: ResoniteNode = {
  label: "GetSlotOrderOffset",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetSlotOrderOffset",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.Long],
};

const ChildOfIndex: ResoniteNode = {
  label: "ChildOfIndex",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.ChildOfIndex",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.Int],
};

const RootSLot: ResoniteNode = {
  label: "RootSLot",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.RootSLot",
  isGeneric: false,
  inputs: [],
  outputs: [RESONITE_TYPE.Slot],
};

const SetChildIndex: ResoniteNode = {
  label: "SetChildIndex",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.SetChildIndex",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.Int],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SetParent: ResoniteNode = {
  label: "SetParent",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.SetParent",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SlotChildrenEvents: ResoniteNode = {
  label: "SlotChildrenEvents",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.SlotChildrenEvents",
  isGeneric: false,
  inputs: [RESONITE_TYPE.User],
  outputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot],
};

export const Slots = packResoniteNodeCategory({
  Info,
  Searching,
  ChildrenCount,
  DestroySlot,
  DestroySlotChildren,
  DuplicateSlot,
  GetActiveUser,
  GetActiveUserRoot,
  GetActiveUserSelf,
  GetChild,
  GetObjectRoot,
  GetParentSlot,
  GetSlot,
  GetSlotOrderOffset,
  ChildOfIndex,
  RootSLot,
  SetChildIndex,
  SetParent,
  SlotChildrenEvents,
});
