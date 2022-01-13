import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SubjectsMaxAggregate", {
  isAbstract: true
})
export class SubjectsMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject_nickname!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  subject_created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  subject_updated_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject_situation!: string | null;
}
