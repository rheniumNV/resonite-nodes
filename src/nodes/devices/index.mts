import {
  packResoniteNodeCategory,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../type.mjs";

const GeneralHeadSet: ResoniteNode = {
  label: "GeneralHeadSet",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Devices.GeneralHeadSet",
  isGeneric: false,
  inputs: [RESONITE_TYPE.User],
  outputs: [RESONITE_TYPE.Bool, RESONITE_TYPE.Float],
};

export const Devices = packResoniteNodeCategory({
  GeneralHeadSet,
});
