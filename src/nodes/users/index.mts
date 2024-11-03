import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../type.mjs";

const GetActiveUser: ResoniteNode = {
  label: "GetActiveUser",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetActiveUser",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Slot],
  outputs: [RESONITE_TYPE.User],
};

const GetActiveUserSelf: ResoniteNode = {
  label: "GetActiveUserSelf",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetActiveUserSelf",
  isGeneric: false,
  inputs: [],
  outputs: [RESONITE_TYPE.User],
};

const GetUserFromComponent: ResoniteNode = {
  label: "GetUserFromComponent",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetUserFromComponent",
  isGeneric: false,
  inputs: [RESONITE_TYPE.IComponent],
  outputs: [RESONITE_TYPE.User],
};

const HostUser: ResoniteNode = {
  label: "HostUser",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.HostUser",
  isGeneric: false,
  inputs: [],
  outputs: [RESONITE_TYPE.User],
};

const LocalUser: ResoniteNode = {
  label: "LocalUser",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.LocalUser",
  isGeneric: false,
  inputs: [],
  outputs: [RESONITE_TYPE.User],
};

const LocalUserRoot: ResoniteNode = {
  label: "LocalUserRoot",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.LocalUserRoot",
  isGeneric: false,
  inputs: [],
  outputs: [RESONITE_TYPE.UserRoot],
};

const LocalUserSlot: ResoniteNode = {
  label: "LocalUserSlot",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.LocalUserSlot",
  isGeneric: false,
  inputs: [],
  outputs: [RESONITE_TYPE.Slot],
};

const LocalUserSpace: ResoniteNode = {
  label: "LocalUserSpace",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.LocalUserSpace",
  isGeneric: false,
  inputs: [],
  outputs: [RESONITE_TYPE.Slot],
};

const SetUserScale: ResoniteNode = {
  label: "SetUserScale",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.SetUserScale",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.User, RESONITE_TYPE.Float],
  outputs: [...RESONITE_FLOW_TYPES],
};

const UserFromID: ResoniteNode = {
  label: "UserFromID",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.UserFromID",
  isGeneric: false,
  inputs: [RESONITE_TYPE.String],
  outputs: [RESONITE_TYPE.User],
};

const UserFromUsername: ResoniteNode = {
  label: "UserFromUsername",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.UserFromUsername",
  isGeneric: false,
  inputs: [RESONITE_TYPE.String, RESONITE_TYPE.Bool],
  outputs: [RESONITE_TYPE.User],
};

const UserMachineID: ResoniteNode = {
  label: "UserMachineID",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.UserMachineID",
  isGeneric: false,
  inputs: [RESONITE_TYPE.User],
  outputs: [RESONITE_TYPE.String],
};

const UserRootSlot: ResoniteNode = {
  label: "UserRootSlot",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.UserRootSlot",
  isGeneric: false,
  inputs: [RESONITE_TYPE.UserRoot],
  outputs: [RESONITE_TYPE.Slot],
};

const UserUserID: ResoniteNode = {
  label: "UserUserID",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.UserUserID",
  isGeneric: false,
  inputs: [RESONITE_TYPE.User],
  outputs: [RESONITE_TYPE.String],
};

const UserUsername: ResoniteNode = {
  label: "UserUsername",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.UserUsername",
  isGeneric: false,
  inputs: [RESONITE_TYPE.User],
  outputs: [RESONITE_TYPE.String],
};

const UserUserRoot: ResoniteNode = {
  label: "UserUserRoot",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.UserUserRoot",
  isGeneric: false,
  inputs: [RESONITE_TYPE.User],
  outputs: [RESONITE_TYPE.UserRoot],
};

export const Users = packResoniteNodeCategory({
  GetActiveUser,
  GetActiveUserSelf,
  GetUserFromComponent,
  HostUser,
  LocalUser,
  LocalUserRoot,
  LocalUserSlot,
  LocalUserSpace,
  SetUserScale,
  UserFromID,
  UserFromUsername,
  UserMachineID,
  UserRootSlot,
  UserUserID,
  UserUsername,
  UserUserRoot,
});
