import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumDayOfTheWeekWithAggregatesFilter } from "../inputs/EnumDayOfTheWeekWithAggregatesFilter";
import { EnumShiftNamesWithAggregatesFilter } from "../inputs/EnumShiftNamesWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ShiftsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ShiftsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ShiftsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ShiftsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShiftsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ShiftsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShiftsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ShiftsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  shift_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumShiftNamesWithAggregatesFilter, {
    nullable: true
  })
  shift_name?: EnumShiftNamesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumDayOfTheWeekWithAggregatesFilter, {
    nullable: true
  })
  shift_day_of_week?: EnumDayOfTheWeekWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  shift_number_class_per_day?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  shift_day_of_week_class?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  shift_created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  shift_updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  shitf_situation?: StringWithAggregatesFilter | undefined;
}
