import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurriculumsCountOrderByAggregateInput } from "../inputs/CurriculumsCountOrderByAggregateInput";
import { CurriculumsMaxOrderByAggregateInput } from "../inputs/CurriculumsMaxOrderByAggregateInput";
import { CurriculumsMinOrderByAggregateInput } from "../inputs/CurriculumsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CurriculumsOrderByWithAggregationInput", {
  isAbstract: true
})
export class CurriculumsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  curriculum_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  curriculum_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  curriculum_class_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  curriculum_created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  curriculum_updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  curriculum_situation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CurriculumsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CurriculumsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurriculumsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CurriculumsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurriculumsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CurriculumsMinOrderByAggregateInput | undefined;
}
