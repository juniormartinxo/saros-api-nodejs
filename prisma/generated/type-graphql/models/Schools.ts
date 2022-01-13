import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Teachers } from "../models/Teachers";
import { Category } from "../enums/Category";
import { SchoolsCount } from "../resolvers/outputs/SchoolsCount";

@TypeGraphQL.ObjectType("Schools", {
  isAbstract: true
})
export class Schools {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  school_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  school_name!: string;

  @TypeGraphQL.Field(_type => Category, {
    nullable: false
  })
  school_category!: "estadual" | "federal" | "municipal" | "militar" | "particular";

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
    nullable: false
  })
  school_created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  school_updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  school_situation!: string;

  Teachers?: Teachers[];

  @TypeGraphQL.Field(_type => SchoolsCount, {
    nullable: true
  })
  _count?: SchoolsCount | null;
}
