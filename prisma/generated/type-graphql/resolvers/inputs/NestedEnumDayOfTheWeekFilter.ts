import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DayOfTheWeek } from "../../enums/DayOfTheWeek";

@TypeGraphQL.InputType("NestedEnumDayOfTheWeekFilter", {
  isAbstract: true
})
export class NestedEnumDayOfTheWeekFilter {
  @TypeGraphQL.Field(_type => DayOfTheWeek, {
    nullable: true
  })
  equals?: "domingo" | "segunda" | "terca" | "quarta" | "quinta" | "sexta" | "sabado" | undefined;

  @TypeGraphQL.Field(_type => [DayOfTheWeek], {
    nullable: true
  })
  in?: Array<"domingo" | "segunda" | "terca" | "quarta" | "quinta" | "sexta" | "sabado"> | undefined;

  @TypeGraphQL.Field(_type => [DayOfTheWeek], {
    nullable: true
  })
  notIn?: Array<"domingo" | "segunda" | "terca" | "quarta" | "quinta" | "sexta" | "sabado"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDayOfTheWeekFilter, {
    nullable: true
  })
  not?: NestedEnumDayOfTheWeekFilter | undefined;
}
