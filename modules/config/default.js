import * as Widgets from "../components/widgets";
import React from "react";
const {
  VanillaFieldSelect,
  VanillaConjs,
  VanillaButton,
  VanillaButtonGroup,
  VanillaProvider,
  VanillaValueSources,
  vanillaConfirm,
} = Widgets;

export const settings = {
  formatField: (field, parts, label2, fieldDefinition, config, isForDisplay) => {
    if (isForDisplay)
      return label2;
    else
      return field;
  },

  renderField: (props) => <VanillaFieldSelect {...props} />,
  renderOperator: (props) => <VanillaFieldSelect {...props} />,
  renderFunc: (props) => <VanillaFieldSelect {...props} />,
  renderConjs: (props) => <VanillaConjs {...props} />,
  renderButton: (props) => <VanillaButton {...props} />,
  renderButtonGroup: (props) => <VanillaButtonGroup {...props} />,
  renderProvider: (props) => <VanillaProvider {...props} />,
  renderValueSources: (props) => <VanillaValueSources {...props} />,
  renderConfirm: vanillaConfirm,

  valueSourcesInfo: {
    value: {},
  },
  fieldSeparator: ".",
  fieldSeparatorDisplay: ".",
  renderSize: "small",
  maxLabelsLength: 100,
  canReorder: true,
  canRegroup: true,
  showNot: true,
  canLeaveEmptyGroup: true,
  shouldCreateEmptyGroup: false,
  forceShowConj: false,
  canShortMongoQuery: true,
  groupActionsPosition: "topRight", // oneOf [topLeft, topCenter, topRight, bottomLeft, bottomCenter, bottomRight]
  setOpOnChangeField: ["keep", "default"], // 'default' (default if present), 'keep' (keep prev from last field), 'first', 'none'
  groupOperators: ["some", "all", "none"],

  convertableWidgets: {
    "number": ["slider", "rangeslider"],
    "slider": ["number", "rangeslider"],
    "rangeslider": ["number", "slider"],
    "text": ["textarea"],
    "textarea": ["text"]
  },

  // localization
  locale: {
    moment: "en",
  },
  valueLabel: "Value",
  valuePlaceholder: "Value",
  fieldLabel: "Field",
  operatorLabel: "Operator",
  funcLabel: "Function",
  fieldPlaceholder: "Select field",
  funcPlaceholder: "Select function",
  operatorPlaceholder: "Select operator",
  deleteLabel: null,
  addGroupLabel: "Add group",
  addRuleLabel: "Add rule",
  addSubRuleLabel: "Add sub rule",
  delGroupLabel: "",
  notLabel: "Not",
  valueSourcesPopupTitle: "Select value source",
  removeRuleConfirmOptions: null,
  removeGroupConfirmOptions: null,

  defaultGroupConjunction: "AND",
  jsonLogic: {
    groupVarKey: "var",
    altVarKey: "var",
  }
};
