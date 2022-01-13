import * as TypeGraphQL from "type-graphql";

export enum DayOfTheWeek {
  domingo = "domingo",
  segunda = "segunda",
  terca = "terca",
  quarta = "quarta",
  quinta = "quinta",
  sexta = "sexta",
  sabado = "sabado"
}
TypeGraphQL.registerEnumType(DayOfTheWeek, {
  name: "DayOfTheWeek",
  description: undefined,
});
