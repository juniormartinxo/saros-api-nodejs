import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationsWhereInput } from "../inputs/EducationsWhereInput";

@TypeGraphQL.InputType("EducationsRelationFilter", {
  isAbstract: true
})
export class EducationsRelationFilter {
  @TypeGraphQL.Field(_type => EducationsWhereInput, {
    nullable: true
  })
  is?: EducationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => EducationsWhereInput, {
    nullable: true
  })
  isNot?: EducationsWhereInput | undefined;
}
