import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("EducationsMaxAggregate", {
  isAbstract: true
})
export class EducationsMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  education_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  education_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  education_nickname!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  education_created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  education_updated_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  education_situation!: string | null;
}
