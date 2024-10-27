import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../type";

const BakeMeshes: ResoniteNode = {
  label: "BakeMeshes",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.BakeMeshes",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot],
  outputs: [],
};

export const Assets = packResoniteNodeCategory({
  BakeMeshes,
});
