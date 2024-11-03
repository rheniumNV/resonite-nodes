import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../type.mjs";
import { Anchors } from "./anchors/index.mjs";
import { BodyNodes } from "./bodyNodes/index.mjs";

const DefaultUserRootScale: ResoniteNode = {
  label: "DefaultUserRootScale",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.DefaultUserRootScale",
  isGeneric: false,
  inputs: [RESONITE_TYPE.UserRoot],
  outputs: [RESONITE_TYPE.Float],
};

const DefaultUserScale: ResoniteNode = {
  label: "DefaultUserScale",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.DefaultUserScale",
  isGeneric: false,
  inputs: [RESONITE_TYPE.User],
  outputs: [RESONITE_TYPE.Float],
};

const EquipAvatar: ResoniteNode = {
  label: "EquipAvatar",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.EquipAvatar",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.User, RESONITE_TYPE.Slot],
  outputs: [],
};

const NearestUserFoot: ResoniteNode = {
  label: "NearestUserFoot",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.NearestUserFoot",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot, RESONITE_TYPE.User],
  outputs: [RESONITE_TYPE.Slot, RESONITE_TYPE.User],
};

const NearestUserHand: ResoniteNode = {
  label: "NearestUserHand",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.NearestUserHand",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot, RESONITE_TYPE.User],
  outputs: [RESONITE_TYPE.Slot, RESONITE_TYPE.User],
};

const NearestUserHead: ResoniteNode = {
  label: "NearestUserHead",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.NearestUserHead",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot, RESONITE_TYPE.User],
  outputs: [RESONITE_TYPE.Slot, RESONITE_TYPE.User],
};

const FingerPose: ResoniteNode = {
  label: "FingerPose",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.FingerPose",
  isGeneric: false,
  inputs: [RESONITE_TYPE.FingerPoseSource, RESONITE_TYPE.BodyNode],
  outputs: [RESONITE_TYPE.Float3, RESONITE_TYPE.FloatQ],
};

const UserFingerPoseSource: ResoniteNode = {
  label: "UserFingerPoseSource",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.UserFingerPoseSource",
  isGeneric: false,
  inputs: [RESONITE_TYPE.User],
  outputs: [RESONITE_TYPE.FingerPoseSource],
};

export const Avatars = packResoniteNodeCategory({
  Anchors,
  BodyNodes,
  DefaultUserRootScale,
  DefaultUserScale,
  EquipAvatar,
  NearestUserFoot,
  NearestUserHand,
  NearestUserHead,
  FingerPose,
  UserFingerPoseSource,
});
