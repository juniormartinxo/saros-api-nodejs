import * as TypeGraphQL from "type-graphql";

export enum SchoolsScalarFieldEnum {
  school_id = "school_id",
  school_name = "school_name",
  school_category = "school_category",
  school_cnpj = "school_cnpj",
  school_address = "school_address",
  school_number = "school_number",
  school_neighborhood = "school_neighborhood",
  school_city = "school_city",
  school_state = "school_state",
  school_cep = "school_cep",
  school_phone = "school_phone",
  school_email = "school_email",
  school_created_at = "school_created_at",
  school_updated_at = "school_updated_at",
  school_situation = "school_situation"
}
TypeGraphQL.registerEnumType(SchoolsScalarFieldEnum, {
  name: "SchoolsScalarFieldEnum",
  description: undefined,
});
