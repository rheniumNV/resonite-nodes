import {
  packResoniteNodeCategory,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../../type.mjs";

const ColorAddAlpha: ResoniteNode = {
  label: "ColorAddAlpha",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorAddAlpha",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color, RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Color],
};

const ColorAddBlue: ResoniteNode = {
  label: "ColorAddBlue",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorAddBlue",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color, RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Color],
};

const ColorAddBlueHDR: ResoniteNode = {
  label: "ColorAddBlueHDR",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorAddBlueHDR",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color, RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Color],
};

const ColorAddGreen: ResoniteNode = {
  label: "ColorAddGreen",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorAddGreen",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color, RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Color],
};

const ColorAddGreenHDR: ResoniteNode = {
  label: "ColorAddGreenHDR",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorAddGreenHDR",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color, RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Color],
};

const ColorAddRed: ResoniteNode = {
  label: "ColorAddRed",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorAddRed",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color, RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Color],
};

const ColorAddRedHDR: ResoniteNode = {
  label: "ColorAddRedHDR",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorAddRedHDR",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color, RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Color],
};

const ColorAddSaturation: ResoniteNode = {
  label: "ColorAddSaturation",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorAddSaturation",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color, RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Color],
};

export const Channels = packResoniteNodeCategory({
  ColorAddAlpha,
  ColorAddBlue,
  ColorAddBlueHDR,
  ColorAddGreen,
  ColorAddGreenHDR,
  ColorAddRed,
  ColorAddRedHDR,
  ColorAddSaturation,
});
