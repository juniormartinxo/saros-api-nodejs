import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TimesheetsWhereInput", {
  isAbstract: true
})
export class TimesheetsWhereInput {
  @TypeGraphQL.Field(_type => [TimesheetsWhereInput], {
    nullable: true
  })
  AND?: TimesheetsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimesheetsWhereInput], {
    nullable: true
  })
  OR?: TimesheetsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimesheetsWhereInput], {
    nullable: true
  })
  NOT?: TimesheetsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  timesheet_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  timesheet_teacher_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  timesheet_class_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  timesheet_date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  timesheet_created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  timesheet_updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  timesheet_situation?: StringFilter | undefined;
}
