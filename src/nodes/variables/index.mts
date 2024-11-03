import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../type.mjs";
import { Dynamic } from "./dynamic/index.mjs";

const DataModelBooleanToggle: ResoniteNode = {
  label: "DataModelBooleanToggle",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DataModelBooleanToggle",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES],
  outputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Bool],
};

export const Variables = packResoniteNodeCategory({
  Dynamic,
  DataModelBooleanToggle,
});
