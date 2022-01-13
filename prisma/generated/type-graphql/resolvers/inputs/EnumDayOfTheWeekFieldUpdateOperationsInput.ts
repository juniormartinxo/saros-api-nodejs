import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DayOfTheWeek } from "../../enums/DayOfTheWeek";

@TypeGraphQL.InputType("EnumDayOfTheWeekFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumDayOfTheWeekFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => DayOfTheWeek, {
    nullable: true
  })
  set?: "domingo" | "segunda" | "terca" | "quarta" | "quinta" | "sexta" | "sabado" | undefined;
}
