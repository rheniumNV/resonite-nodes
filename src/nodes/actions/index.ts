import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_TYPE,
  ResoniteNode,
} from "../../type";

const ValueDecrement: ResoniteNode = {
  label: "ValueDecrement",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.ValueDecrement<${i}>`,
  isGeneric: true,
  inputs: [RESONITE_TYPE.Float, RESONITE_TYPE.Int],
  outputs: [],
};

const ValueIncrement: ResoniteNode = {
  label: "ValueIncrement",
  type: (i: string) =>
    "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.Actions.ValueIncrement<" +
    i +
    ">",
  isGeneric: true,
  inputs: [RESONITE_TYPE.Float, RESONITE_TYPE.Int],
  outputs: [],
};

const ValueWrite: ResoniteNode = {
  label: "Write",
  type: (i: string) =>
    "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.ValueWrite<" +
    i +
    ">",
  isGeneric: true,
  inputs: [
    RESONITE_TYPE.Float,
    RESONITE_TYPE.Int,
    RESONITE_TYPE.Int2,
    RESONITE_TYPE.Int3,
    RESONITE_TYPE.Int4,
    RESONITE_TYPE.IntQ,
    RESONITE_TYPE.Float2,
    RESONITE_TYPE.Float3,
    RESONITE_TYPE.Float4,
    RESONITE_TYPE.FloatQ,
    RESONITE_TYPE.ColorX,
    RESONITE_TYPE.Boolean,
    RESONITE_TYPE.String,
    RESONITE_TYPE.Uri,
    RESONITE_TYPE.Double,
    RESONITE_TYPE.Double2,
    RESONITE_TYPE.Double3,
    RESONITE_TYPE.Double4,
    RESONITE_TYPE.DoubleQ,
  ],
  outputs: [],
};

const ObjectWrite: ResoniteNode = {
  label: "Write",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.ObjectWrite<${i}>`,
  isGeneric: true,
  inputs: [
    RESONITE_TYPE.Slot,
    RESONITE_TYPE.User,
    RESONITE_TYPE.UserRoot,
    ...RESONITE_FLOW_TYPES,
  ],
  outputs: [],
};

export const Actions = packResoniteNodeCategory({
  ValueDecrement,
  ValueIncrement,
  ValueWrite,
  ObjectWrite,
});
