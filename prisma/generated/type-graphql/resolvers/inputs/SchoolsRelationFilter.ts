import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolsWhereInput } from "../inputs/SchoolsWhereInput";

@TypeGraphQL.InputType("SchoolsRelationFilter", {
  isAbstract: true
})
export class SchoolsRelationFilter {
  @TypeGraphQL.Field(_type => SchoolsWhereInput, {
    nullable: true
  })
  is?: SchoolsWhereInput | undefined;

  @TypeGraphQL.Field(_type => SchoolsWhereInput, {
    nullable: true
  })
  isNot?: SchoolsWhereInput | undefined;
}
