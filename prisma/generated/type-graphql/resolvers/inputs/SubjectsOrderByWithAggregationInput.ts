import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectsCountOrderByAggregateInput } from "../inputs/SubjectsCountOrderByAggregateInput";
import { SubjectsMaxOrderByAggregateInput } from "../inputs/SubjectsMaxOrderByAggregateInput";
import { SubjectsMinOrderByAggregateInput } from "../inputs/SubjectsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SubjectsOrderByWithAggregationInput", {
  isAbstract: true
})
export class SubjectsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subject_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subject_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subject_nickname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subject_educations?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subject_created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subject_updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subject_situation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SubjectsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SubjectsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubjectsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SubjectsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubjectsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SubjectsMinOrderByAggregateInput | undefined;
}
