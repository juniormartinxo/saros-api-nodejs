import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassesWhereInput } from "../inputs/ClassesWhereInput";

@TypeGraphQL.InputType("ClassesListRelationFilter", {
  isAbstract: true
})
export class ClassesListRelationFilter {
  @TypeGraphQL.Field(_type => ClassesWhereInput, {
    nullable: true
  })
  every?: ClassesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClassesWhereInput, {
    nullable: true
  })
  some?: ClassesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClassesWhereInput, {
    nullable: true
  })
  none?: ClassesWhereInput | undefined;
}
