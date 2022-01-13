import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ClassesCreateManyEducationInput", {
  isAbstract: true
})
export class ClassesCreateManyEducationInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  class_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  class_name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  class_teachers_ids!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  class_created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  class_updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  class_situation?: string | undefined;
}
