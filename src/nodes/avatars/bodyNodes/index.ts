import {
  packResoniteNodeCategory,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../../type";

const BodyNodeChirality: ResoniteNode = {
  label: "Chirality",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.BodyNodeChirality",
  isGeneric: false,
  inputs: [RESONITE_TYPE.BodyNode],
  outputs: [RESONITE_TYPE.Chirality],
};

const BodyNodeSlot: ResoniteNode = {
  label: "Slot",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.BodyNodeSlot",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot, RESONITE_TYPE.BodyNode],
  outputs: [RESONITE_TYPE.Slot],
};

const BodyNodeSlotInChildren: ResoniteNode = {
  label: "SlotInChildren",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.BodyNodeSlotInChildren",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot, RESONITE_TYPE.BodyNode],
  outputs: [RESONITE_TYPE.Slot],
};

const ComposeFinger: ResoniteNode = {
  label: "ComposeFinger",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.ComposeFinger",
  isGeneric: false,
  inputs: [
    RESONITE_TYPE.FingerType,
    RESONITE_TYPE.FingerSegmentType,
    RESONITE_TYPE.Chirality,
  ],
  outputs: [RESONITE_TYPE.BodyNode],
};

const FingerNodeIndex: ResoniteNode = {
  label: "FingerNodeIndex",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.FingerNodeIndex",
  isGeneric: false,
  inputs: [RESONITE_TYPE.BodyNode],
  outputs: [RESONITE_TYPE.Int],
};

const GetFingerSegmentType: ResoniteNode = {
  label: "GetFingerSegmentType",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetFingerSegmentType",
  isGeneric: false,
  inputs: [RESONITE_TYPE.BodyNode],
  outputs: [RESONITE_TYPE.FingerSegmentType],
};

const GetFingerType: ResoniteNode = {
  label: "GetFingerType",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetFingerType",
  isGeneric: false,
  inputs: [RESONITE_TYPE.BodyNode],
  outputs: [RESONITE_TYPE.FingerType],
};

const GetSide: ResoniteNode = {
  label: "GetSide",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetSide",
  isGeneric: false,
  inputs: [RESONITE_TYPE.BodyNode, RESONITE_TYPE.Chirality],
  outputs: [RESONITE_TYPE.BodyNode],
};

const IsEye: ResoniteNode = {
  label: "IsEye",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.IsEye",
  isGeneric: false,
  inputs: [RESONITE_TYPE.BodyNode],
  outputs: [RESONITE_TYPE.Boolean],
};

const OtherSide: ResoniteNode = {
  label: "OtherSide",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.OtherSide",
  isGeneric: false,
  inputs: [RESONITE_TYPE.BodyNode],
  outputs: [RESONITE_TYPE.BodyNode],
};

const RelativeBodyNode: ResoniteNode = {
  label: "RelativeBodyNode",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.RelativeBodyNode",
  isGeneric: false,
  inputs: [RESONITE_TYPE.BodyNode],
  outputs: [RESONITE_TYPE.BodyNode],
};

export const BodyNodes = packResoniteNodeCategory({
  BodyNodeChirality,
  BodyNodeSlot,
  BodyNodeSlotInChildren,
  ComposeFinger,
  FingerNodeIndex,
  GetFingerSegmentType,
  GetFingerType,
  GetSide,
  IsEye,
  OtherSide,
  RelativeBodyNode,
});
