import * as TypeGraphQL from "type-graphql";

export enum SchedulesScalarFieldEnum {
  schedule_id = "schedule_id",
  schedule_name = "schedule_name",
  schedule_start = "schedule_start",
  schedule_end = "schedule_end",
  schedule_shift_id = "schedule_shift_id",
  schedule_created_at = "schedule_created_at",
  schedule_updated_at = "schedule_updated_at",
  schedule_situation = "schedule_situation"
}
TypeGraphQL.registerEnumType(SchedulesScalarFieldEnum, {
  name: "SchedulesScalarFieldEnum",
  description: undefined,
});
