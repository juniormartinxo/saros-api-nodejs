import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolsCountAggregate } from "../outputs/SchoolsCountAggregate";
import { SchoolsMaxAggregate } from "../outputs/SchoolsMaxAggregate";
import { SchoolsMinAggregate } from "../outputs/SchoolsMinAggregate";
import { Category } from "../../enums/Category";

@TypeGraphQL.ObjectType("SchoolsGroupBy", {
  isAbstract: true
})
export class SchoolsGroupBy {
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

  @TypeGraphQL.Field(_type => SchoolsCountAggregate, {
    nullable: true
  })
  _count!: SchoolsCountAggregate | null;

  @TypeGraphQL.Field(_type => SchoolsMinAggregate, {
    nullable: true
  })
  _min!: SchoolsMinAggregate | null;

  @TypeGraphQL.Field(_type => SchoolsMaxAggregate, {
    nullable: true
  })
  _max!: SchoolsMaxAggregate | null;
}
