import * as TypeGraphQL from "type-graphql";

export enum UsersScalarFieldEnum {
  user_id = "user_id",
  user_name = "user_name",
  user_email = "user_email",
  user_salt = "user_salt",
  user_password = "user_password",
  user_created_at = "user_created_at",
  user_updated_at = "user_updated_at",
  user_situation = "user_situation"
}
TypeGraphQL.registerEnumType(UsersScalarFieldEnum, {
  name: "UsersScalarFieldEnum",
  description: undefined,
});
