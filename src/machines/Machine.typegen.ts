// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: "redBackground" | "greenBackground";
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    greenBackground: "ACTIVATE";
    redBackground: "DISABLE";
  };
  eventsCausingServices: {};
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: "active" | "disabled";
  tags: never;
}
