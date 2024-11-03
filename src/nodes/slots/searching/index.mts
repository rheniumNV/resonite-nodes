import {
  packResoniteNodeCategory,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../../type.mjs";

const FindChildByName: ResoniteNode = {
  label: "FindChildByName",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.Searching.FindChildByName",
  isGeneric: false,
  inputs: [
    RESONITE_TYPE.Slot,
    RESONITE_TYPE.String,
    RESONITE_TYPE.Bool,
    RESONITE_TYPE.Int,
  ],
  outputs: [RESONITE_TYPE.Slot],
};

const FindChildByTag: ResoniteNode = {
  label: "FindChildByTag",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.Searching.FindChildByTag",
  isGeneric: false,
  inputs: [
    RESONITE_TYPE.Slot,
    RESONITE_TYPE.String,
    RESONITE_TYPE.Bool,
    RESONITE_TYPE.Int,
  ],
  outputs: [RESONITE_TYPE.Slot],
};

const FindParentByName: ResoniteNode = {
  label: "FindParentByName",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.Searching.FindParentByName",
  isGeneric: false,
  inputs: [
    RESONITE_TYPE.Slot,
    RESONITE_TYPE.String,
    RESONITE_TYPE.Bool,
    RESONITE_TYPE.Int,
  ],
  outputs: [RESONITE_TYPE.Slot],
};

const FindParentByTag: ResoniteNode = {
  label: "FindParentByTag",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.Searching.FindParentByTag",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot, RESONITE_TYPE.String, RESONITE_TYPE.Int],
  outputs: [RESONITE_TYPE.Slot],
};

export const Searching = packResoniteNodeCategory({
  FindChildByName,
  FindChildByTag,
  FindParentByName,
  FindParentByTag,
});
