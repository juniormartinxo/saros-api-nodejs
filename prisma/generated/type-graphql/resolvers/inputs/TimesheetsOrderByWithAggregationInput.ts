import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimesheetsCountOrderByAggregateInput } from "../inputs/TimesheetsCountOrderByAggregateInput";
import { TimesheetsMaxOrderByAggregateInput } from "../inputs/TimesheetsMaxOrderByAggregateInput";
import { TimesheetsMinOrderByAggregateInput } from "../inputs/TimesheetsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TimesheetsOrderByWithAggregationInput", {
  isAbstract: true
})
export class TimesheetsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timesheet_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timesheet_teacher_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timesheet_class_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timesheet_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timesheet_created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timesheet_updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timesheet_situation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TimesheetsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TimesheetsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TimesheetsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TimesheetsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TimesheetsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TimesheetsMinOrderByAggregateInput | undefined;
}
