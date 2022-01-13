import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ClassesWhereUniqueInput", {
  isAbstract: true
})
export class ClassesWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  class_id?: string | undefined;
}
