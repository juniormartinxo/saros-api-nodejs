import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeachersCreateNestedManyWithoutSchoolInput } from "../inputs/TeachersCreateNestedManyWithoutSchoolInput";
import { Category } from "../../enums/Category";

@TypeGraphQL.InputType("SchoolsCreateInput", {
  isAbstract: true
})
export class SchoolsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  school_name!: string;

  @TypeGraphQL.Field(_type => Category, {
    nullable: true
  })
  school_category?: "estadual" | "federal" | "municipal" | "militar" | "particular" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  school_cnpj!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  school_address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  school_number!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  school_neighborhood!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  school_city!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  school_state!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  school_cep!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  school_phone!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  school_email!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  school_created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  school_updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_situation?: string | undefined;

  @TypeGraphQL.Field(_type => TeachersCreateNestedManyWithoutSchoolInput, {
    nullable: true
  })
  Teachers?: TeachersCreateNestedManyWithoutSchoolInput | undefined;
}
