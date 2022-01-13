import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CurriculumsMinAggregate", {
  isAbstract: true
})
export class CurriculumsMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  curriculum_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  curriculum_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  curriculum_class_id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  curriculum_created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  curriculum_updated_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  curriculum_situation!: string | null;
}
