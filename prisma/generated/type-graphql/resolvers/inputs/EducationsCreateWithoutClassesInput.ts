import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("EducationsCreateWithoutClassesInput", {
  isAbstract: true
})
export class EducationsCreateWithoutClassesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  education_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  education_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  education_nickname!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  education_created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  education_updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  education_situation?: string | undefined;
}
