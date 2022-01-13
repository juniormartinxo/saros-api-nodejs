import * as TypeGraphQL from "type-graphql";

export enum ShiftsScalarFieldEnum {
  shift_id = "shift_id",
  shift_name = "shift_name",
  shift_day_of_week = "shift_day_of_week",
  shift_number_class_per_day = "shift_number_class_per_day",
  shift_day_of_week_class = "shift_day_of_week_class",
  shift_created_at = "shift_created_at",
  shift_updated_at = "shift_updated_at",
  shitf_situation = "shitf_situation"
}
TypeGraphQL.registerEnumType(ShiftsScalarFieldEnum, {
  name: "ShiftsScalarFieldEnum",
  description: undefined,
});
