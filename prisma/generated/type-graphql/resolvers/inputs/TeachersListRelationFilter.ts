import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeachersWhereInput } from "../inputs/TeachersWhereInput";

@TypeGraphQL.InputType("TeachersListRelationFilter", {
  isAbstract: true
})
export class TeachersListRelationFilter {
  @TypeGraphQL.Field(_type => TeachersWhereInput, {
    nullable: true
  })
  every?: TeachersWhereInput | undefined;

  @TypeGraphQL.Field(_type => TeachersWhereInput, {
    nullable: true
  })
  some?: TeachersWhereInput | undefined;

  @TypeGraphQL.Field(_type => TeachersWhereInput, {
    nullable: true
  })
  none?: TeachersWhereInput | undefined;
}
