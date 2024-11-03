import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../../type.mjs";

const OnActivated: ResoniteNode = {
  label: "OnActivated",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.OnActivated",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Bool],
  outputs: [...RESONITE_FLOW_TYPES],
};

const OnDeactivated: ResoniteNode = {
  label: "OnDeactivated",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.OnDeactivated",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Bool],
  outputs: [...RESONITE_FLOW_TYPES],
};

const OnDestroy: ResoniteNode = {
  label: "OnDestroy",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.OnDestroy",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Bool],
  outputs: [...RESONITE_FLOW_TYPES],
};

const OnDestroying: ResoniteNode = {
  label: "OnDestroying",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.OnDestroying",
  isGeneric: false,
  inputs: [],
  outputs: [...RESONITE_FLOW_TYPES],
};

const OnDuplicate: ResoniteNode = {
  label: "OnDuplicate",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.OnDuplicate",
  isGeneric: false,
  inputs: [],
  outputs: [...RESONITE_FLOW_TYPES],
};

const OnPackageImproted: ResoniteNode = {
  label: "OnPackageImproted",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.OnPackageImproted",
  isGeneric: false,
  inputs: [],
  outputs: [...RESONITE_FLOW_TYPES],
};

const OnPaste: ResoniteNode = {
  label: "OnPaste",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.OnPaste",
  isGeneric: false,
  inputs: [],
  outputs: [...RESONITE_FLOW_TYPES],
};

const OnSaving: ResoniteNode = {
  label: "OnSaving",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.OnSaving",
  isGeneric: false,
  inputs: [],
  outputs: [...RESONITE_FLOW_TYPES],
};

const OnStart: ResoniteNode = {
  label: "OnStart",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.OnStart",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Bool],
  outputs: [...RESONITE_FLOW_TYPES],
};

export const Events = packResoniteNodeCategory({
  OnActivated,
  OnDeactivated,
  OnDestroy,
  OnDestroying,
  OnDuplicate,
  OnPackageImproted,
  OnPaste,
  OnSaving,
  OnStart,
});
