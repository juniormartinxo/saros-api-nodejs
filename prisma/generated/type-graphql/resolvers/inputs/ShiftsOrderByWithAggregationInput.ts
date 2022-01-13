import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShiftsAvgOrderByAggregateInput } from "../inputs/ShiftsAvgOrderByAggregateInput";
import { ShiftsCountOrderByAggregateInput } from "../inputs/ShiftsCountOrderByAggregateInput";
import { ShiftsMaxOrderByAggregateInput } from "../inputs/ShiftsMaxOrderByAggregateInput";
import { ShiftsMinOrderByAggregateInput } from "../inputs/ShiftsMinOrderByAggregateInput";
import { ShiftsSumOrderByAggregateInput } from "../inputs/ShiftsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ShiftsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ShiftsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shift_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shift_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shift_day_of_week?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shift_number_class_per_day?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shift_day_of_week_class?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shift_created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shift_updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shitf_situation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShiftsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ShiftsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShiftsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ShiftsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShiftsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ShiftsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShiftsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ShiftsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShiftsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ShiftsSumOrderByAggregateInput | undefined;
}
