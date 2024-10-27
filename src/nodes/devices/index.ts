import {
  packResoniteNodeCategory,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../type";

const GeneralHeadSet: ResoniteNode = {
  label: "GeneralHeadSet",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Devices.GeneralHeadSet",
  isGeneric: false,
  inputs: [RESONITE_TYPE.User],
  outputs: [RESONITE_TYPE.Boolean, RESONITE_TYPE.Float],
};

export const Devices = packResoniteNodeCategory({
  GeneralHeadSet,
});
