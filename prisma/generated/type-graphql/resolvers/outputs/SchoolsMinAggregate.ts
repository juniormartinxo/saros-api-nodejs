import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category } from "../../enums/Category";

@TypeGraphQL.ObjectType("SchoolsMinAggregate", {
  isAbstract: true
})
export class SchoolsMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_name!: string | null;

  @TypeGraphQL.Field(_type => Category, {
    nullable: true
  })
  school_category!: "estadual" | "federal" | "municipal" | "militar" | "particular" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_cnpj!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_number!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_neighborhood!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_city!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_cep!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_email!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  school_created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  school_updated_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_situation!: string | null;
}
