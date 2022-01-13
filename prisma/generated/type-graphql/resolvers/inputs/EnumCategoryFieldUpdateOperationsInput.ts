import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category } from "../../enums/Category";

@TypeGraphQL.InputType("EnumCategoryFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumCategoryFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Category, {
    nullable: true
  })
  set?: "estadual" | "federal" | "municipal" | "militar" | "particular" | undefined;
}
