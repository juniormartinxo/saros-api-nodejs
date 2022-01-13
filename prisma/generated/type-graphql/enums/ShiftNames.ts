import * as TypeGraphQL from "type-graphql";

export enum ShiftNames {
  matutino = "matutino",
  vespertino = "vespertino",
  noturno = "noturno"
}
TypeGraphQL.registerEnumType(ShiftNames, {
  name: "ShiftNames",
  description: undefined,
});
