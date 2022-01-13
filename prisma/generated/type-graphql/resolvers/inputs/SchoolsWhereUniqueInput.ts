import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SchoolsWhereUniqueInput", {
  isAbstract: true
})
export class SchoolsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  school_id?: string | undefined;
}
