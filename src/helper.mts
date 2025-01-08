import { Nodes } from "./nodes/index.mjs";
import {
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
  ResoniteNodeCategory,
  TypeConfig,
} from "./type.mjs";

const toFlat = (
  category: ResoniteNodeCategory,
  path: string[],
): (ResoniteNode & { path: string[] })[] => {
  return Object.entries(category.category).flatMap(([key, value]) =>
    "category" in value
      ? toFlat(value, [...path, key])
      : {
          ...value,
          path,
        },
  );
};

const flatNodes = toFlat(Nodes, []);

const targetTypes = Object.values(RESONITE_TYPE);

const convertGenericType = (type: string) =>
  ({
    [RESONITE_TYPE.Bool]: "bool",
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
    [RESONITE_TYPE.Color]: "color",
    [RESONITE_TYPE.ColorX]: "colorX",
    [RESONITE_TYPE.String]: "string",
    [RESONITE_TYPE.UInt]: "uint",
    [RESONITE_TYPE.UInt2]: "uint2",
    [RESONITE_TYPE.UInt3]: "uint3",
    [RESONITE_TYPE.UInt4]: "uint4",
    [RESONITE_TYPE.ULong]: "ulong",
    [RESONITE_TYPE.ULong2]: "ulong2",
    [RESONITE_TYPE.ULong3]: "ulong3",
    [RESONITE_TYPE.ULong4]: "ulong4",
    [RESONITE_TYPE.Long]: "long",
    [RESONITE_TYPE.Long2]: "long2",
    [RESONITE_TYPE.Long3]: "long3",
    [RESONITE_TYPE.Long4]: "long4",
    [RESONITE_TYPE.Byte]: "byte",
    [RESONITE_TYPE.SByte]: "sbyte",
    [RESONITE_TYPE.Short]: "short",
    [RESONITE_TYPE.UShort]: "ushort",
    [RESONITE_TYPE.Decimal]: "decimal",
    [RESONITE_TYPE.Char]: "char",
    [RESONITE_TYPE.Float2x2]: "float2x2",
    [RESONITE_TYPE.Float3x3]: "float3x3",
    [RESONITE_TYPE.Float4x4]: "float4x4",
    [RESONITE_TYPE.Double2x2]: "double2x2",
    [RESONITE_TYPE.Double3x3]: "double3x3",
    [RESONITE_TYPE.Double4x4]: "double4x4",
    [RESONITE_TYPE.Uri]: "uri",
    [RESONITE_TYPE.Slot]: "[FrooxEngine]FrooxEngine.Slot",
    [RESONITE_TYPE.User]: "[FrooxEngine]FrooxEngine.User",
    [RESONITE_TYPE.UserRoot]: "[FrooxEngine]FrooxEngine.UserRoot",
    [RESONITE_TYPE.BodyNode]: "[FrooxEngine]FrooxEngine.BodyNode",
    [RESONITE_TYPE.AvatarAnchor]: "[FrooxEngine]FrooxEngine.IAvatarAnchor",
  })[type] ?? type;

const solveConfig = (
  nodes: (ResoniteNode & { path: string[] })[],
  type: string,
) => {
  const categories = Object.entries(
    nodes.reduce(
      (acc, node) => {
        const key =
          node.path[0] === "Flow"
            ? node.path.join("/")
            : (node.path[0] ?? "UnCategorized");
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(node);
        return acc;
      },
      {} as Record<string, ResoniteNode[]>,
    ),
  ).map(([key, value]) => ({
    key,
    children: value.map(
      (node) =>
        ({
          type: "simpleNode",
          label: node.label,
          value: node.isGeneric
            ? node.type(convertGenericType(type))
            : node.type,
        }) as const,
    ),
  }));

  return {
    defaultCategory: 0,
    categories,
  };
};

const typeMap = targetTypes.reduce((acc, type) => {
  acc[type] = {
    input: solveConfig(
      flatNodes.filter(
        (node) =>
          node.outputs.includes(type) &&
          (!node.isGeneric ||
            !(RESONITE_FLOW_TYPES as string[]).includes(type)),
      ),
      type,
    ),
    output: solveConfig(
      flatNodes.filter(
        (node) =>
          node.inputs.includes(type) &&
          (!node.isGeneric ||
            !(RESONITE_FLOW_TYPES as string[]).includes(type)),
      ),
      type,
    ),
  };
  return acc;
}, {} as TypeConfig);

export const getTypeConfig = (type: string): TypeConfig[string] | undefined => {
  return typeMap[type];
};
