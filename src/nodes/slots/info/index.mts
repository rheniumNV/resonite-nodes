import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../../type.mjs";

const GetSlotActive: ResoniteNode = {
  label: "GetSlotActive",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetSlotActive",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.Bool],
};

const GetSlotActiveSelf: ResoniteNode = {
  label: "GetSlotActiveSelf",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetSlotActiveSelf",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.Bool],
};

const GetSlotName: ResoniteNode = {
  label: "GetSlotName",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetSlotName",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.String],
};

const GetSlotPersistent: ResoniteNode = {
  label: "GetSlotPersistent",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetSlotPersistent",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.Bool],
};

const GetSlotPersistentSelf: ResoniteNode = {
  label: "GetSlotPersistentSelf",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetSlotPersistentSelf",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.Bool],
};

const GetTag: ResoniteNode = {
  label: "GetTag",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetTag",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.String],
};

const HasTag: ResoniteNode = {
  label: "HasTag",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.HasTag",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot, RESONITE_TYPE.String],
  outputs: [RESONITE_TYPE.Bool],
};

const SetSlotActiveSelf: ResoniteNode = {
  label: "SetSlotActiveSelf",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.SetSlotActiveSelf",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.Bool],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SetSlotName: ResoniteNode = {
  label: "SetSlotName",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.SetSlotName",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.String],
  outputs: [...RESONITE_FLOW_TYPES],
};

const setSlotOrderOffset: ResoniteNode = {
  label: "setSlotOrderOffset",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.setSlotOrderOffset",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.Long],
  outputs: [...RESONITE_FLOW_TYPES],
};

const SetSlotPersistentSelf: ResoniteNode = {
  label: "SetSlotPersistentSelf",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.SetSlotPersistentSelf",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.Bool],
  outputs: [...RESONITE_FLOW_TYPES],
};
const SetTag: ResoniteNode = {
  label: "SetTag",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.SetTag",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.String],
  outputs: [...RESONITE_FLOW_TYPES],
};

export const Info = packResoniteNodeCategory({
  GetSlotActive,
  GetSlotActiveSelf,
  GetSlotName,
  GetSlotPersistent,
  GetSlotPersistentSelf,
  GetTag,
  HasTag,
  SetSlotActiveSelf,
  SetSlotName,
  setSlotOrderOffset,
  SetSlotPersistentSelf,
  SetTag,
});
