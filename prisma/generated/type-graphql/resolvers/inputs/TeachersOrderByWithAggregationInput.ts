import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeachersCountOrderByAggregateInput } from "../inputs/TeachersCountOrderByAggregateInput";
import { TeachersMaxOrderByAggregateInput } from "../inputs/TeachersMaxOrderByAggregateInput";
import { TeachersMinOrderByAggregateInput } from "../inputs/TeachersMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TeachersOrderByWithAggregationInput", {
  isAbstract: true
})
export class TeachersOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teacher_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teacher_school_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teacher_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teacher_nickname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teacher_email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teacher_celphone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teacher_disciplines_ids?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teacher_shifts_ids?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teacher_restrictions?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teacher_created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teacher_updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teacher_situation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TeachersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TeachersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeachersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TeachersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeachersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TeachersMinOrderByAggregateInput | undefined;
}
