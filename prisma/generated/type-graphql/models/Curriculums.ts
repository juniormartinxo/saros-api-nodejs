import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Curriculums", {
  isAbstract: true
})
export class Curriculums {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  curriculum_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  curriculum_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  curriculum_class_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  curriculum_created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  curriculum_updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  curriculum_situation!: string;
}
