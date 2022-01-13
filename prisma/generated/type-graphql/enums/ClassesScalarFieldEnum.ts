import * as TypeGraphQL from "type-graphql";

export enum ClassesScalarFieldEnum {
  class_id = "class_id",
  class_name = "class_name",
  class_teachers_ids = "class_teachers_ids",
  class_education_id = "class_education_id",
  class_created_at = "class_created_at",
  class_updated_at = "class_updated_at",
  class_situation = "class_situation"
}
TypeGraphQL.registerEnumType(ClassesScalarFieldEnum, {
  name: "ClassesScalarFieldEnum",
  description: undefined,
});
