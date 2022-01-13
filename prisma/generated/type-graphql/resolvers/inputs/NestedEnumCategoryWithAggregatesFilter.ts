import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumCategoryFilter } from "../inputs/NestedEnumCategoryFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Category } from "../../enums/Category";

@TypeGraphQL.InputType("NestedEnumCategoryWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumCategoryWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumCategoryWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumCategoryWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumCategoryFilter, {
    nullable: true
  })
  _min?: NestedEnumCategoryFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumCategoryFilter, {
    nullable: true
  })
  _max?: NestedEnumCategoryFilter | undefined;
}
