import * as TypeGraphQL from "type-graphql";

export enum SubjectsScalarFieldEnum {
  subject_id = "subject_id",
  subject_name = "subject_name",
  subject_nickname = "subject_nickname",
  subject_educations = "subject_educations",
  subject_created_at = "subject_created_at",
  subject_updated_at = "subject_updated_at",
  subject_situation = "subject_situation"
}
TypeGraphQL.registerEnumType(SubjectsScalarFieldEnum, {
  name: "SubjectsScalarFieldEnum",
  description: undefined,
});
