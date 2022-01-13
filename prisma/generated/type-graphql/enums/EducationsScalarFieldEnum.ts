import * as TypeGraphQL from "type-graphql";

export enum EducationsScalarFieldEnum {
  education_id = "education_id",
  education_name = "education_name",
  education_nickname = "education_nickname",
  education_created_at = "education_created_at",
  education_updated_at = "education_updated_at",
  education_situation = "education_situation"
}
TypeGraphQL.registerEnumType(EducationsScalarFieldEnum, {
  name: "EducationsScalarFieldEnum",
  description: undefined,
});
