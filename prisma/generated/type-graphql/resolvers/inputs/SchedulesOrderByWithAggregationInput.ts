import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulesCountOrderByAggregateInput } from "../inputs/SchedulesCountOrderByAggregateInput";
import { SchedulesMaxOrderByAggregateInput } from "../inputs/SchedulesMaxOrderByAggregateInput";
import { SchedulesMinOrderByAggregateInput } from "../inputs/SchedulesMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SchedulesOrderByWithAggregationInput", {
  isAbstract: true
})
export class SchedulesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  schedule_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  schedule_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  schedule_start?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  schedule_end?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  schedule_shift_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  schedule_created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  schedule_updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  schedule_situation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SchedulesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SchedulesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchedulesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SchedulesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchedulesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SchedulesMinOrderByAggregateInput | undefined;
}
