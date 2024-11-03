import {
  packResoniteNodeCategory,
  RESONITE_OBJECT_TYPES,
  RESONITE_TYPE,
  RESONITE_VALUE_TYPES,
  ResoniteNode,
} from "../../type.mjs";

const ObjectConditional: ResoniteNode = {
  label: "?:",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.ObjectConditional<${i}>`,
  isGeneric: true,
  inputs: [RESONITE_TYPE.Bool, ...RESONITE_OBJECT_TYPES],
  outputs: [...RESONITE_OBJECT_TYPES],
};

const ValueConditional: ResoniteNode = {
  label: "?:",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.ValueConditional<${i}>`,
  isGeneric: true,
  inputs: [RESONITE_TYPE.Bool, ...RESONITE_VALUE_TYPES],
  outputs: [...RESONITE_VALUE_TYPES],
};

const DistanceFloat: ResoniteNode = {
  label: "Distance_Float",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.Distance_Float",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Float],
};

const Distance_Float2: ResoniteNode = {
  label: "Distance_Float2",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.Distance_Float2",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float2],
  outputs: [RESONITE_TYPE.Float],
};

const Distance_Float3: ResoniteNode = {
  label: "Distance_Float3",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.Distance_Float3",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float3],
  outputs: [RESONITE_TYPE.Float],
};

const Distance_Float4: ResoniteNode = {
  label: "Distance_Float4",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.Distance_Float4",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float4],
  outputs: [RESONITE_TYPE.Float],
};

const Distance_Double: ResoniteNode = {
  label: "Distance_Double",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.Distance_Double",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Double],
  outputs: [RESONITE_TYPE.Double],
};

const Distance_Double2: ResoniteNode = {
  label: "Distance_Double2",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.Distance_Double2",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Double2],
  outputs: [RESONITE_TYPE.Double],
};

const Distance_Double3: ResoniteNode = {
  label: "Distance_Double3",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.Distance_Double3",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Double3],
  outputs: [RESONITE_TYPE.Double],
};

const Distance_Double4: ResoniteNode = {
  label: "Distance_Double4",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.Distance_Double4",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Double4],
  outputs: [RESONITE_TYPE.Double],
};

const ObjectEquals: ResoniteNode = {
  label: "==",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.ObjectEquals<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_OBJECT_TYPES],
  outputs: [RESONITE_TYPE.Bool],
};

const ValueEquals: ResoniteNode = {
  label: "==",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.ValueEquals<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [RESONITE_TYPE.Bool],
};

const ObjectNotEquals: ResoniteNode = {
  label: "!=",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.ObjectNotEquals<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_OBJECT_TYPES],
  outputs: [RESONITE_TYPE.Bool],
};

const ValueNotEquals: ResoniteNode = {
  label: "!=",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.ValueNotEquals<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [RESONITE_TYPE.Bool],
};

const ValueGreaterOrEqual: ResoniteNode = {
  label: ">=",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueGreaterOrEqual<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [RESONITE_TYPE.Bool],
};

const ValueGreaterThan: ResoniteNode = {
  label: ">",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueGreaterThan<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [RESONITE_TYPE.Bool],
};

const IsInfinity_Float: ResoniteNode = {
  label: "IsInfinity_Float",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsInfinity_Float",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Bool],
};

const IsInfinity_Float2: ResoniteNode = {
  label: "IsInfinity_Float2",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsInfinity_Float2",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float2],
  outputs: [RESONITE_TYPE.Bool],
};

const IsInfinity_Float3: ResoniteNode = {
  label: "IsInfinity_Float3",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsInfinity_Float3",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float3],
  outputs: [RESONITE_TYPE.Bool],
};

const IsInfinity_Float4: ResoniteNode = {
  label: "IsInfinity_Float4",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsInfinity_Float4",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float4],
  outputs: [RESONITE_TYPE.Bool],
};

const IsInfinity_FloatQ: ResoniteNode = {
  label: "IsInfinity_FloatQ",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsInfinity_FloatQ",
  isGeneric: false,
  inputs: [RESONITE_TYPE.FloatQ],
  outputs: [RESONITE_TYPE.Bool],
};

const IsInfinity_Double: ResoniteNode = {
  label: "IsInfinity_Double",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsInfinity_Double",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Double],
  outputs: [RESONITE_TYPE.Bool],
};

const IsInfinity_Double2: ResoniteNode = {
  label: "IsInfinity_Double2",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsInfinity_Double2",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Double2],
  outputs: [RESONITE_TYPE.Bool],
};

const IsInfinity_Double3: ResoniteNode = {
  label: "IsInfinity_Double3",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsInfinity_Double3",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Double3],
  outputs: [RESONITE_TYPE.Bool],
};

const IsInfinity_Double4: ResoniteNode = {
  label: "IsInfinity_Double4",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsInfinity_Double4",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Double4],
  outputs: [RESONITE_TYPE.Bool],
};

const IsInfinity_DoubleQ: ResoniteNode = {
  label: "IsInfinity_DoubleQ",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsInfinity_DoubleQ",
  isGeneric: false,
  inputs: [RESONITE_TYPE.DoubleQ],
  outputs: [RESONITE_TYPE.Bool],
};

const IsNaN_Float: ResoniteNode = {
  label: "IsNaN_Float",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsNaN_Float",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float],
  outputs: [RESONITE_TYPE.Bool],
};

const IsNaN_Float2: ResoniteNode = {
  label: "IsNaN_Float2",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsNaN_Float2",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float2],
  outputs: [RESONITE_TYPE.Bool],
};

const IsNaN_Float3: ResoniteNode = {
  label: "IsNaN_Float3",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsNaN_Float3",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float3],
  outputs: [RESONITE_TYPE.Bool],
};

const IsNaN_Float4: ResoniteNode = {
  label: "IsNaN_Float4",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsNaN_Float4",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Float4],
  outputs: [RESONITE_TYPE.Bool],
};

const IsNaN_FloatQ: ResoniteNode = {
  label: "IsNaN_FloatQ",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsNaN_FloatQ",
  isGeneric: false,
  inputs: [RESONITE_TYPE.FloatQ],
  outputs: [RESONITE_TYPE.Bool],
};

const IsNaN_Double: ResoniteNode = {
  label: "IsNaN_Double",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsNaN_Double",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Double],
  outputs: [RESONITE_TYPE.Bool],
};

const IsNaN_Double2: ResoniteNode = {
  label: "IsNaN_Double2",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsNaN_Double2",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Double2],
  outputs: [RESONITE_TYPE.Bool],
};

const IsNaN_Double3: ResoniteNode = {
  label: "IsNaN_Double3",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsNaN_Double3",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Double3],
  outputs: [RESONITE_TYPE.Bool],
};

const IsNaN_Double4: ResoniteNode = {
  label: "IsNaN_Double4",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsNaN_Double4",
  isGeneric: false,
  inputs: [RESONITE_TYPE.Double4],
  outputs: [RESONITE_TYPE.Bool],
};

const IsNaN_DoubleQ: ResoniteNode = {
  label: "IsNaN_DoubleQ",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.IsNaN_DoubleQ",
  isGeneric: false,
  inputs: [RESONITE_TYPE.DoubleQ],
  outputs: [RESONITE_TYPE.Bool],
};

const IsNull: ResoniteNode = {
  label: "IsNull",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.IsNull<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_OBJECT_TYPES],
  outputs: [RESONITE_TYPE.Bool],
};

const LessOrEqual: ResoniteNode = {
  label: "<=",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueLessOrEqual<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [RESONITE_TYPE.Bool],
};

const LessThan: ResoniteNode = {
  label: "<",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueLessThan<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [RESONITE_TYPE.Bool],
};

const NotNull: ResoniteNode = {
  label: "NotNull",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.NotNull<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_OBJECT_TYPES],
  outputs: [RESONITE_TYPE.Bool],
};

const NullCoalesce: ResoniteNode = {
  label: "??",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.NullCoalesce<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_OBJECT_TYPES],
  outputs: [...RESONITE_OBJECT_TYPES],
};

const Add: ResoniteNode = {
  label: "+",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueAdd<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [...RESONITE_VALUE_TYPES],
};

const MultiAdd: ResoniteNode = {
  label: "+.",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueAddMulti<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [...RESONITE_VALUE_TYPES],
};

const Sub: ResoniteNode = {
  label: "-",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueSub<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [...RESONITE_VALUE_TYPES],
};

const MultiSub: ResoniteNode = {
  label: "-.",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueSubMulti<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [...RESONITE_VALUE_TYPES],
};

const Mul: ResoniteNode = {
  label: "×",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueMul<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [...RESONITE_VALUE_TYPES],
};

const MultiMul: ResoniteNode = {
  label: "×.",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueMulMulti<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [...RESONITE_VALUE_TYPES],
};

const Div: ResoniteNode = {
  label: "÷",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueDiv<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [...RESONITE_VALUE_TYPES],
};

const MultiDiv: ResoniteNode = {
  label: "÷.",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueDivMulti<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [...RESONITE_VALUE_TYPES],
};

const ValueDec: ResoniteNode = {
  label: "-1",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueDec<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [...RESONITE_VALUE_TYPES],
};

const ValueInc: ResoniteNode = {
  label: "+1",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueInc<${i}>`,
  isGeneric: true,
  inputs: [...RESONITE_VALUE_TYPES],
  outputs: [...RESONITE_VALUE_TYPES],
};

export const Operators = packResoniteNodeCategory({
  ObjectConditional,
  ValueConditional,
  DistanceFloat,
  Distance_Float2,
  Distance_Float3,
  Distance_Float4,
  Distance_Double,
  Distance_Double2,
  Distance_Double3,
  Distance_Double4,
  ObjectEquals,
  ValueEquals,
  ObjectNotEquals,
  ValueNotEquals,
  ValueGreaterOrEqual,
  ValueGreaterThan,
  IsInfinity_Float,
  IsInfinity_Float2,
  IsInfinity_Float3,
  IsInfinity_Float4,
  IsInfinity_FloatQ,
  IsInfinity_Double,
  IsInfinity_Double2,
  IsInfinity_Double3,
  IsInfinity_Double4,
  IsInfinity_DoubleQ,
  IsNaN_Float,
  IsNaN_Float2,
  IsNaN_Float3,
  IsNaN_Float4,
  IsNaN_FloatQ,
  IsNaN_Double,
  IsNaN_Double2,
  IsNaN_Double3,
  IsNaN_Double4,
  IsNaN_DoubleQ,
  IsNull,
  LessOrEqual,
  LessThan,
  NotNull,
  NullCoalesce,
  Sub,
  MultiSub,
  Add,
  MultiAdd,
  Mul,
  MultiMul,
  Div,
  MultiDiv,
  ValueDec,
  ValueInc,
});
