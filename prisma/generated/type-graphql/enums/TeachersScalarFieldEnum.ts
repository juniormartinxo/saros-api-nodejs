import * as TypeGraphQL from "type-graphql";

export enum TeachersScalarFieldEnum {
  teacher_id = "teacher_id",
  teacher_school_id = "teacher_school_id",
  teacher_name = "teacher_name",
  teacher_nickname = "teacher_nickname",
  teacher_email = "teacher_email",
  teacher_celphone = "teacher_celphone",
  teacher_disciplines_ids = "teacher_disciplines_ids",
  teacher_shifts_ids = "teacher_shifts_ids",
  teacher_restrictions = "teacher_restrictions",
  teacher_created_at = "teacher_created_at",
  teacher_updated_at = "teacher_updated_at",
  teacher_situation = "teacher_situation"
}
TypeGraphQL.registerEnumType(TeachersScalarFieldEnum, {
  name: "TeachersScalarFieldEnum",
  description: undefined,
});
