import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category } from "../../enums/Category";

@TypeGraphQL.InputType("NestedEnumCategoryFilter", {
  isAbstract: true
})
export class NestedEnumCategoryFilter {
  @TypeGraphQL.Field(_type => Category, {
    nullable: true
  })
  equals?: "estadual" | "federal" | "municipal" | "militar" | "particular" | undefined;

  @TypeGraphQL.Field(_type => [Category], {
    nullable: true
  })
  in?: Array<"estadual" | "federal" | "municipal" | "militar" | "particular"> | undefined;

  @TypeGraphQL.Field(_type => [Category], {
    nullable: true
  })
  notIn?: Array<"estadual" | "federal" | "municipal" | "militar" | "particular"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumCategoryFilter, {
    nullable: true
  })
  not?: NestedEnumCategoryFilter | undefined;
}
