import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ShiftsRelationFilter } from "../inputs/ShiftsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SchedulesWhereInput", {
  isAbstract: true
})
export class SchedulesWhereInput {
  @TypeGraphQL.Field(_type => [SchedulesWhereInput], {
    nullable: true
  })
  AND?: SchedulesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesWhereInput], {
    nullable: true
  })
  OR?: SchedulesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesWhereInput], {
    nullable: true
  })
  NOT?: SchedulesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  schedule_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  schedule_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  schedule_start?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  schedule_end?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ShiftsRelationFilter, {
    nullable: true
  })
  shift?: ShiftsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  schedule_shift_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  schedule_created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  schedule_updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  schedule_situation?: StringFilter | undefined;
}
