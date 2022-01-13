import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TimesheetsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TimesheetsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TimesheetsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TimesheetsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimesheetsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TimesheetsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimesheetsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TimesheetsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  timesheet_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  timesheet_teacher_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  timesheet_class_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  timesheet_date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  timesheet_created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  timesheet_updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  timesheet_situation?: StringWithAggregatesFilter | undefined;
}
