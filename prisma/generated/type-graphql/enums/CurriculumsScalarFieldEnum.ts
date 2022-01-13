import * as TypeGraphQL from "type-graphql";

export enum CurriculumsScalarFieldEnum {
  curriculum_id = "curriculum_id",
  curriculum_name = "curriculum_name",
  curriculum_class_id = "curriculum_class_id",
  curriculum_created_at = "curriculum_created_at",
  curriculum_updated_at = "curriculum_updated_at",
  curriculum_situation = "curriculum_situation"
}
TypeGraphQL.registerEnumType(CurriculumsScalarFieldEnum, {
  name: "CurriculumsScalarFieldEnum",
  description: undefined,
});
