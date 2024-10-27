import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../type";

const PlayOneShot: ResoniteNode = {
  label: "PlayOneShot",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Audio.PlayOneShot",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.AuditClip],
  outputs: [],
};

export const Audio = packResoniteNodeCategory({
  PlayOneShot,
});
