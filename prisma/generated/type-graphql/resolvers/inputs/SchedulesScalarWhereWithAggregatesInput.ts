import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SchedulesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SchedulesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SchedulesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SchedulesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SchedulesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SchedulesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  schedule_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  schedule_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  schedule_start?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  schedule_end?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  schedule_shift_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  schedule_created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  schedule_updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  schedule_situation?: StringWithAggregatesFilter | undefined;
}
