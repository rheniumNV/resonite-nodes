import {
  packResoniteNodeCategory,
  RESONITE_FLOW_TYPES,
  RESONITE_OBJECT_TYPES,
  RESONITE_TYPE,
  RESONITE_VALUE_TYPES,
  ResoniteNode,
} from "../../../type.mjs";

const ClearDynamicVariable: ResoniteNode = {
  label: "ClearDynamicVariable",
  type: "[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.ClearDynamicVariables",
  isGeneric: false,
  inputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Slot, RESONITE_TYPE.String],
  outputs: [...RESONITE_FLOW_TYPES, RESONITE_TYPE.Int],
};

const CreateDynamicObjectVariable: ResoniteNode = {
  label: "CreateDynamicObjectVariable",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.CreateDynamicObjectVariable<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Slot,
    RESONITE_TYPE.String,
    RESONITE_TYPE.Bool,
    ...RESONITE_OBJECT_TYPES,
  ],
  outputs: [...RESONITE_FLOW_TYPES],
};

const CreateDynamicValueVariable: ResoniteNode = {
  label: "CreateDynamicValueVariable",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.CreateDynamicValueVariable<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Slot,
    RESONITE_TYPE.String,
    RESONITE_TYPE.Bool,
    ...RESONITE_VALUE_TYPES,
  ],
  outputs: [...RESONITE_FLOW_TYPES],
};

const DynamicVariableObjectInput: ResoniteNode = {
  label: "DynamicVariableObjectInput",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DynamicVariableObjectInput<${i}>`,
  isGeneric: true,
  inputs: [],
  outputs: [...RESONITE_OBJECT_TYPES],
};

const DynamicVariableValueInput: ResoniteNode = {
  label: "DynamicVariableValueInput",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DynamicVariableValueInput<${i}>`,
  isGeneric: true,
  inputs: [],
  outputs: [...RESONITE_VALUE_TYPES, RESONITE_TYPE.Bool],
};

const DynamicVariableObjectInputWithEvents: ResoniteNode = {
  label: "DynamicVariableObjectInputWithEvents",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DynamicVariableObjectInputWithEvents<${i}>`,
  isGeneric: true,
  inputs: [RESONITE_TYPE.User],
  outputs: [
    ...RESONITE_FLOW_TYPES,
    ...RESONITE_OBJECT_TYPES,
    RESONITE_TYPE.Bool,
  ],
};

const DynamicVariableValueInputWithEvents: ResoniteNode = {
  label: "DynamicVariableValueInputWithEvents",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DynamicVariableValueInputWithEvents<${i}>`,
  isGeneric: true,
  inputs: [RESONITE_TYPE.User],
  outputs: [
    ...RESONITE_FLOW_TYPES,
    ...RESONITE_VALUE_TYPES,
    RESONITE_TYPE.Bool,
  ],
};

const ReadDynamicObjectVariable: ResoniteNode = {
  label: "ReadDynamicObjectVariable",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.ReadDynamicObjectVariable<${i}>`,
  isGeneric: true,
  inputs: [RESONITE_TYPE.Slot, RESONITE_TYPE.String],
  outputs: [...RESONITE_OBJECT_TYPES, RESONITE_TYPE.Bool],
};

const ReadDynamicValueVariable: ResoniteNode = {
  label: "ReadDynamicValueVariable",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.ReadDynamicValueVariable<${i}>`,
  isGeneric: true,
  inputs: [RESONITE_TYPE.Slot, RESONITE_TYPE.String],
  outputs: [...RESONITE_VALUE_TYPES, RESONITE_TYPE.Bool],
};

const WriteDynamicObjectVariable: ResoniteNode = {
  label: "WriteDynamicObjectVariable",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.WriteDynamicObjectVariable<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Slot,
    RESONITE_TYPE.String,
    ...RESONITE_OBJECT_TYPES,
  ],
  outputs: [...RESONITE_FLOW_TYPES],
};

const WriteDynamicValueVariable: ResoniteNode = {
  label: "WriteDynamicValueVariable",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.WriteDynamicValueVariable<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Slot,
    RESONITE_TYPE.String,
    ...RESONITE_VALUE_TYPES,
  ],
  outputs: [...RESONITE_FLOW_TYPES],
};

const WriteOrCreateDynamicObject: ResoniteNode = {
  label: "WriteOrCreateDynamicObject",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.WriteOrCreateDynamicObject<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Slot,
    RESONITE_TYPE.String,
    ...RESONITE_OBJECT_TYPES,
  ],
  outputs: [...RESONITE_FLOW_TYPES],
};

const WriteOrCreateDynamicValue: ResoniteNode = {
  label: "WriteOrCreateDynamicValue",
  type: (i: string) =>
    `[ProtoFluxBindings]FrooxEngine.ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.WriteOrCreateDynamicValue<${i}>`,
  isGeneric: true,
  inputs: [
    ...RESONITE_FLOW_TYPES,
    RESONITE_TYPE.Slot,
    RESONITE_TYPE.String,
    ...RESONITE_VALUE_TYPES,
  ],
  outputs: [...RESONITE_FLOW_TYPES],
};

export const Dynamic = packResoniteNodeCategory({
  ClearDynamicVariable,
  CreateDynamicObjectVariable,
  CreateDynamicValueVariable,
  DynamicVariableObjectInput,
  DynamicVariableValueInput,
  DynamicVariableObjectInputWithEvents,
  DynamicVariableValueInputWithEvents,
  ReadDynamicObjectVariable,
  ReadDynamicValueVariable,
  WriteDynamicObjectVariable,
  WriteDynamicValueVariable,
  WriteOrCreateDynamicObject,
  WriteOrCreateDynamicValue,
});
