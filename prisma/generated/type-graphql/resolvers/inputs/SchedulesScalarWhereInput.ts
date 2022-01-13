import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SchedulesScalarWhereInput", {
  isAbstract: true
})
export class SchedulesScalarWhereInput {
  @TypeGraphQL.Field(_type => [SchedulesScalarWhereInput], {
    nullable: true
  })
  AND?: SchedulesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesScalarWhereInput], {
    nullable: true
  })
  OR?: SchedulesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesScalarWhereInput], {
    nullable: true
  })
  NOT?: SchedulesScalarWhereInput[] | undefined;

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
