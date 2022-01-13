import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulesCreateNestedManyWithoutShiftInput } from "../inputs/SchedulesCreateNestedManyWithoutShiftInput";
import { DayOfTheWeek } from "../../enums/DayOfTheWeek";
import { ShiftNames } from "../../enums/ShiftNames";

@TypeGraphQL.InputType("ShiftsCreateInput", {
  isAbstract: true
})
export class ShiftsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shift_id?: string | undefined;

  @TypeGraphQL.Field(_type => ShiftNames, {
    nullable: true
  })
  shift_name?: "matutino" | "vespertino" | "noturno" | undefined;

  @TypeGraphQL.Field(_type => DayOfTheWeek, {
    nullable: true
  })
  shift_day_of_week?: "domingo" | "segunda" | "terca" | "quarta" | "quinta" | "sexta" | "sabado" | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  shift_number_class_per_day?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  shift_day_of_week_class?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  shift_created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  shift_updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shitf_situation?: string | undefined;

  @TypeGraphQL.Field(_type => SchedulesCreateNestedManyWithoutShiftInput, {
    nullable: true
  })
  Schedules?: SchedulesCreateNestedManyWithoutShiftInput | undefined;
}
