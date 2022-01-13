import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ClassesMinAggregate", {
  isAbstract: true
})
export class ClassesMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  class_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  class_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  class_education_id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  class_created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  class_updated_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  class_situation!: string | null;
}
