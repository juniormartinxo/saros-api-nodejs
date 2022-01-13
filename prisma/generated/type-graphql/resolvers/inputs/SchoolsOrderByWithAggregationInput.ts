import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolsCountOrderByAggregateInput } from "../inputs/SchoolsCountOrderByAggregateInput";
import { SchoolsMaxOrderByAggregateInput } from "../inputs/SchoolsMaxOrderByAggregateInput";
import { SchoolsMinOrderByAggregateInput } from "../inputs/SchoolsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SchoolsOrderByWithAggregationInput", {
  isAbstract: true
})
export class SchoolsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_category?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_cnpj?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_neighborhood?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_city?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_cep?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_phone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  school_situation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SchoolsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SchoolsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchoolsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SchoolsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SchoolsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SchoolsMinOrderByAggregateInput | undefined;
}
