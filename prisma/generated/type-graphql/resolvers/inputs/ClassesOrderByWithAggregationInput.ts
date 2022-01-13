import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassesCountOrderByAggregateInput } from "../inputs/ClassesCountOrderByAggregateInput";
import { ClassesMaxOrderByAggregateInput } from "../inputs/ClassesMaxOrderByAggregateInput";
import { ClassesMinOrderByAggregateInput } from "../inputs/ClassesMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ClassesOrderByWithAggregationInput", {
  isAbstract: true
})
export class ClassesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  class_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  class_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  class_teachers_ids?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  class_education_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  class_created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  class_updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  class_situation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ClassesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ClassesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClassesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ClassesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ClassesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ClassesMinOrderByAggregateInput | undefined;
}
