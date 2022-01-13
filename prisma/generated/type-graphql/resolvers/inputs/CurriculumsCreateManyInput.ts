import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CurriculumsCreateManyInput", {
  isAbstract: true
})
export class CurriculumsCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  curriculum_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  curriculum_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  curriculum_class_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  curriculum_created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  curriculum_updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  curriculum_situation?: string | undefined;
}
