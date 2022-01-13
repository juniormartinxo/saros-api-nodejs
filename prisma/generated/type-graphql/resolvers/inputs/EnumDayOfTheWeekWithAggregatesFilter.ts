import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumDayOfTheWeekFilter } from "../inputs/NestedEnumDayOfTheWeekFilter";
import { NestedEnumDayOfTheWeekWithAggregatesFilter } from "../inputs/NestedEnumDayOfTheWeekWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { DayOfTheWeek } from "../../enums/DayOfTheWeek";

@TypeGraphQL.InputType("EnumDayOfTheWeekWithAggregatesFilter", {
  isAbstract: true
})
export class EnumDayOfTheWeekWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumDayOfTheWeekWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumDayOfTheWeekWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDayOfTheWeekFilter, {
    nullable: true
  })
  _min?: NestedEnumDayOfTheWeekFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDayOfTheWeekFilter, {
    nullable: true
  })
  _max?: NestedEnumDayOfTheWeekFilter | undefined;
}
