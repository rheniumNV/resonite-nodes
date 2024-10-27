import {
  packResoniteNodeCategory,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../type";
import { Channels } from "./channels";

const ApplyHDRGammaColorX: ResoniteNode = {
  label: "ApplyHDRGammaColorX",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ApplyHDRGammaColorX",
  isGeneric: false,
  inputs: [RESONITE_TYPE.ColorX, RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.ColorX],
};

const ApplyHDRInverseGammaColorX: ResoniteNode = {
  label: "ApplyHDRInverseGammaColorX",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ApplyHDRInverseGammaColorX",
  isGeneric: false,
  inputs: [RESONITE_TYPE.ColorX],
  outputs: [RESONITE_TYPE.ColorX],
};

const BlackBodyColor: ResoniteNode = {
  label: "BlackBodyColor",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.BlackBodyColor",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float, RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Color],
};

const BlackBodyColorX: ResoniteNode = {
  label: "BlackBodyColorX",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.BlackBodyColorX",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.ColorX],
};

const ColorAdditiveBlend: ResoniteNode = {
  label: "ColorAdditiveBlend",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorAdditiveBlend",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color],
  outputs: [RESONITE_TYPE.Color],
};

const ColorAlphaBlend: ResoniteNode = {
  label: "ColorAlphaBlend",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorAlphaBlend",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color],
  outputs: [RESONITE_TYPE.Color],
};

const ColorFromHexCode: ResoniteNode = {
  label: "ColorFromHexCode",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorFromHexCode",
  isGeneric: false,
  inputs: [RESONITE_TYPE.String],
  outputs: [RESONITE_TYPE.Color],
};

const ColorHue: ResoniteNode = {
  label: "ColorHue",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorHue",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Color],
};

const ColorLuminance: ResoniteNode = {
  label: "ColorLuminance",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorLuminance",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color],
  outputs: [RESONITE_TYPE.Float],
};

const ColorMultiplicativeBlend: ResoniteNode = {
  label: "ColorMultiplicativeBlend",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorMultiplicativeBlend",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color],
  outputs: [RESONITE_TYPE.Color],
};

const ColorSoftAdditiveBlend: ResoniteNode = {
  label: "ColorSoftAdditiveBlend",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorSoftAdditiveBlend",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color],
  outputs: [RESONITE_TYPE.Color],
};

const ColorToHexCode: ResoniteNode = {
  label: "ColorToHexCode",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorToHexCode",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color],
  outputs: [RESONITE_TYPE.String],
};

const ColorToHSL: ResoniteNode = {
  label: "ColorToHSL",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorToHSL",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color],
  outputs: [RESONITE_TYPE.Float],
};

const ColorToHSV: ResoniteNode = {
  label: "ColorToHSV",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorToHSV",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color],
  outputs: [RESONITE_TYPE.Float],
};

const ColorXAdditiveBlend: ResoniteNode = {
  label: "ColorXAdditiveBlend",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorXAdditiveBlend",
  isGeneric: false,
  inputs: [RESONITE_TYPE.ColorX],
  outputs: [RESONITE_TYPE.ColorX],
};

const ColorXAlphaBlend: ResoniteNode = {
  label: "ColorXAlphaBlend",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorXAlphaBlend",
  isGeneric: false,
  inputs: [RESONITE_TYPE.ColorX],
  outputs: [RESONITE_TYPE.ColorX],
};

const ColorXFromHexCode: ResoniteNode = {
  label: "ColorXFromHexCode",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorXFromHexCode",
  isGeneric: false,
  inputs: [RESONITE_TYPE.String],
  outputs: [RESONITE_TYPE.ColorX],
};

const ColorXHue: ResoniteNode = {
  label: "ColorXHue",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorXHue",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.ColorX],
};

const ColorXLuminance: ResoniteNode = {
  label: "ColorXLuminance",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorXLuminance",
  isGeneric: false,
  inputs: [RESONITE_TYPE.ColorX],
  outputs: [RESONITE_TYPE.Float],
};

const ColorXMultiplicativeBlend: ResoniteNode = {
  label: "ColorXMultiplicativeBlend",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorXMultiplicativeBlend",
  isGeneric: false,
  inputs: [RESONITE_TYPE.ColorX],
  outputs: [RESONITE_TYPE.ColorX],
};

const ColorXSoftAdditiveBlend: ResoniteNode = {
  label: "ColorXSoftAdditiveBlend",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorXSoftAdditiveBlend",
  isGeneric: false,
  inputs: [RESONITE_TYPE.ColorX],
  outputs: [RESONITE_TYPE.ColorX],
};

const ColorXToHexCode: ResoniteNode = {
  label: "ColorXToHexCode",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorXToHexCode",
  isGeneric: false,
  inputs: [RESONITE_TYPE.ColorX],
  outputs: [RESONITE_TYPE.String],
};

const ColorXToHSL: ResoniteNode = {
  label: "ColorXToHSL",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorXToHSL",
  isGeneric: false,
  inputs: [RESONITE_TYPE.ColorX],
  outputs: [RESONITE_TYPE.Float],
};

const ColorXToHSV: ResoniteNode = {
  label: "ColorXToHSV",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ColorXToHSV",
  isGeneric: false,
  inputs: [RESONITE_TYPE.ColorX],
  outputs: [RESONITE_TYPE.Float],
};

const ConvertColorProfile: ResoniteNode = {
  label: "ConvertColorProfile",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.ConvertColorProfile",
  isGeneric: false,
  inputs: [RESONITE_TYPE.ColorX, RESONITE_TYPE.ColorProfile],
  outputs: [RESONITE_TYPE.ColorX],
};

const HSL_ToColor: ResoniteNode = {
  label: "HSL_ToColor",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.HSL_ToColor",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Color],
};

const HSL_ToColorX: ResoniteNode = {
  label: "HSL_ToColorX",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.HSL_ToColorX",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.ColorX],
};

const HSV_ToColor: ResoniteNode = {
  label: "HSV_ToColor",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.HSV_ToColor",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Color],
};

const HSV_ToColorX: ResoniteNode = {
  label: "HSV_ToColorX",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.HSV_ToColorX",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.ColorX],
};

const InvertColor: ResoniteNode = {
  label: "InvertColor",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.InvertColor",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Color],
  outputs: [RESONITE_TYPE.Color],
};

const InvertColorX: ResoniteNode = {
  label: "InvertColorX",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.InvertColorX",
  isGeneric: false,
  inputs: [RESONITE_TYPE.ColorX],
  outputs: [RESONITE_TYPE.ColorX],
};

const WaveLengthColor: ResoniteNode = {
  label: "WaveLengthColor",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.WaveLengthColor",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Color],
};

const WaveLengthColorX: ResoniteNode = {
  label: "WaveLengthColorX",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Color.WaveLengthColorX",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.ColorX],
};

export const Colors = packResoniteNodeCategory({
  Channels,
  ApplyHDRGammaColorX,
  ApplyHDRInverseGammaColorX,
  BlackBodyColor,
  BlackBodyColorX,
  ColorAdditiveBlend,
  ColorAlphaBlend,
  ColorFromHexCode,
  ColorHue,
  ColorLuminance,
  ColorMultiplicativeBlend,
  ColorSoftAdditiveBlend,
  ColorToHexCode,
  ColorToHSL,
  ColorToHSV,
  ColorXAdditiveBlend,
  ColorXAlphaBlend,
  ColorXFromHexCode,
  ColorXHue,
  ColorXLuminance,
  ColorXMultiplicativeBlend,
  ColorXSoftAdditiveBlend,
  ColorXToHexCode,
  ColorXToHSL,
  ColorXToHSV,
  ConvertColorProfile,
  HSL_ToColor,
  HSL_ToColorX,
  HSV_ToColor,
  HSV_ToColorX,
  InvertColor,
  InvertColorX,
  WaveLengthColor,
  WaveLengthColorX,
});
