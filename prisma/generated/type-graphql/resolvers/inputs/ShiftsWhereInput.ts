import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumDayOfTheWeekFilter } from "../inputs/EnumDayOfTheWeekFilter";
import { EnumShiftNamesFilter } from "../inputs/EnumShiftNamesFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SchedulesListRelationFilter } from "../inputs/SchedulesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ShiftsWhereInput", {
  isAbstract: true
})
export class ShiftsWhereInput {
  @TypeGraphQL.Field(_type => [ShiftsWhereInput], {
    nullable: true
  })
  AND?: ShiftsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShiftsWhereInput], {
    nullable: true
  })
  OR?: ShiftsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShiftsWhereInput], {
    nullable: true
  })
  NOT?: ShiftsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  shift_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumShiftNamesFilter, {
    nullable: true
  })
  shift_name?: EnumShiftNamesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumDayOfTheWeekFilter, {
    nullable: true
  })
  shift_day_of_week?: EnumDayOfTheWeekFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  shift_number_class_per_day?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  shift_day_of_week_class?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  shift_created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  shift_updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  shitf_situation?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => SchedulesListRelationFilter, {
    nullable: true
  })
  Schedules?: SchedulesListRelationFilter | undefined;
}
