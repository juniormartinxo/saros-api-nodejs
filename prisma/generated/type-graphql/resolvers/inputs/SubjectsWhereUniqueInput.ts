import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SubjectsWhereUniqueInput", {
  isAbstract: true
})
export class SubjectsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject_id?: string | undefined;
}
