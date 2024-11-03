import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../../type.mjs";

const AnchoredUser: ResoniteNode = {
  label: "AnchoredUser",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.AnchoredUser",
  isGeneric: false,
  inputs: [RESONITE_TYPE.AvatarAnchor],
  outputs: [RESONITE_TYPE.User],
};

const AnchorEvents: ResoniteNode = {
  label: "AnchorEvents",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.AnchorEvents",
  isGeneric: false,
  inputs: [RESONITE_TYPE.AvatarAnchor],
  outputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.User],
};

const AnchorUser: ResoniteNode = {
  label: "AnchorUser",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.AnchorUser",
  isGeneric: false,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.User,
    RESONITE_TYPE.AvatarAnchor,
  ],
  outputs: [...RESONITE_FLOW_TYPES],
};

const GetUserAnchor: ResoniteNode = {
  label: "GetUserAnchor",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.GetUserAnchor",
  isGeneric: false,
  inputs: [RESONITE_TYPE.User],
  outputs: [RESONITE_TYPE.AvatarAnchor],
};

const IsAnchorOccupied: ResoniteNode = {
  label: "IsAnchorOccupied",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.IsAnchorOccupied",
  isGeneric: false,
  inputs: [RESONITE_TYPE.AvatarAnchor],
  outputs: [RESONITE_TYPE.Bool],
};

const IsUserAnchored: ResoniteNode = {
  label: "IsUserAnchored",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.IsUserAnchored",
  isGeneric: false,
  inputs: [RESONITE_TYPE.User],
  outputs: [RESONITE_TYPE.Bool],
};

const ReleaseUser: ResoniteNode = {
  label: "ReleaseUser",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.ReleaseUser",
  isGeneric: false,
  inputs: [RESONITE_TYPE.User],
  outputs: [],
};
export const Anchors = packResoniteNodeCategory({
  AnchoredUser,
  AnchorEvents,
  AnchorUser,
  GetUserAnchor,
  IsAnchorOccupied,
  IsUserAnchored,
  ReleaseUser,
});
