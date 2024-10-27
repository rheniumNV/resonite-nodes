import { Nodes } from "./nodes";
import {
  RESONITE_TYPE,
  ResoniteNode,
  ResoniteNodeCategory,
  TypeConfig,
} from "./type";

const toFlat = (
  category: ResoniteNodeCategory,
  path: string[]
): (ResoniteNode & { path: string[] })[] => {
  return Object.entries(category.category).flatMap(([key, value]) =>
    "category" in value
      ? toFlat(value, [...path, key])
      : {
          ...value,
          path,
        }
  );
};

const flatNodes = toFlat(Nodes, []);

const targetTypes = Object.values(RESONITE_TYPE);

const convertGenericType = (type: string) =>
  ({
    [RESONITE_TYPE.Boolean]: "bool",
    [RESONITE_TYPE.Double]: "double",
    [RESONITE_TYPE.Double2]: "double2",
    [RESONITE_TYPE.Double3]: "double3",
    [RESONITE_TYPE.Double4]: "double4",
    [RESONITE_TYPE.DoubleQ]: "doubleQ",
    [RESONITE_TYPE.Float]: "float",
    [RESONITE_TYPE.Float2]: "float2",
    [RESONITE_TYPE.Float3]: "float3",
    [RESONITE_TYPE.Float4]: "float4",
    [RESONITE_TYPE.FloatQ]: "floatQ",
    [RESONITE_TYPE.Int]: "int",
    [RESONITE_TYPE.Int2]: "int2",
    [RESONITE_TYPE.Int3]: "int3",
    [RESONITE_TYPE.Int4]: "int4",
    [RESONITE_TYPE.IntQ]: "intQ",
    [RESONITE_TYPE.Color]: "color",
    [RESONITE_TYPE.ColorX]: "colorX",
    [RESONITE_TYPE.String]: "string",
    [RESONITE_TYPE.Uri]: "uri",
    [RESONITE_TYPE.Slot]: "[FrooxEngine]FrooxEngine.Slot",
    [RESONITE_TYPE.User]: "[FrooxEngine]FrooxEngine.User",
    [RESONITE_TYPE.UserRoot]: "[FrooxEngine]FrooxEngine.UserRoot",
  }[type] ?? type);

const typeMap = targetTypes.reduce((acc, type) => {
  acc[type] = {
    input: flatNodes
      .filter((node) => node.outputs.includes(type))
      .map((node) => ({
        type: "simpleNode",
        label: node.label,
        value: node.isGeneric ? node.type(convertGenericType(type)) : node.type,
      })),
    output: flatNodes
      .filter((node) => node.inputs.includes(type))
      .map((node) => ({
        type: "simpleNode",
        label: node.label,
        value: node.isGeneric ? node.type(convertGenericType(type)) : node.type,
      })),
  };
  return acc;
}, {} as TypeConfig);

export const getTypeConfig = (type: string): TypeConfig[string] => {
  return typeMap[type];
};
