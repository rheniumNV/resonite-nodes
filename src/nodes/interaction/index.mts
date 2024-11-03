import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../type.mjs";

const ButtonEvents: ResoniteNode = {
  label: "ButtonEvents",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.ButtonEvents",
  isGeneric: false,
  inputs: [],
  outputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Float3],
};

export const Interaction = packResoniteNodeCategory({
  ButtonEvents,
});
