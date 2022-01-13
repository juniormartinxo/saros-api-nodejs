import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationsCountOrderByAggregateInput } from "../inputs/EducationsCountOrderByAggregateInput";
import { EducationsMaxOrderByAggregateInput } from "../inputs/EducationsMaxOrderByAggregateInput";
import { EducationsMinOrderByAggregateInput } from "../inputs/EducationsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EducationsOrderByWithAggregationInput", {
  isAbstract: true
})
export class EducationsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  education_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  education_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  education_nickname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  education_created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  education_updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  education_situation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EducationsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EducationsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EducationsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EducationsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EducationsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EducationsMinOrderByAggregateInput | undefined;
}
