import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCountOrderByAggregateInput } from "../inputs/UsersCountOrderByAggregateInput";
import { UsersMaxOrderByAggregateInput } from "../inputs/UsersMaxOrderByAggregateInput";
import { UsersMinOrderByAggregateInput } from "../inputs/UsersMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UsersOrderByWithAggregationInput", {
  isAbstract: true
})
export class UsersOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_salt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_situation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UsersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UsersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UsersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UsersMinOrderByAggregateInput | undefined;
}
