import * as TypeGraphQL from "type-graphql";

export enum TimesheetsScalarFieldEnum {
  timesheet_id = "timesheet_id",
  timesheet_teacher_id = "timesheet_teacher_id",
  timesheet_class_id = "timesheet_class_id",
  timesheet_date = "timesheet_date",
  timesheet_created_at = "timesheet_created_at",
  timesheet_updated_at = "timesheet_updated_at",
  timesheet_situation = "timesheet_situation"
}
TypeGraphQL.registerEnumType(TimesheetsScalarFieldEnum, {
  name: "TimesheetsScalarFieldEnum",
  description: undefined,
});
