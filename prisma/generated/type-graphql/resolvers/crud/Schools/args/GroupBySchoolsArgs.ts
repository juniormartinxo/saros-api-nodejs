import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchoolsOrderByWithAggregationInput } from "../../../inputs/SchoolsOrderByWithAggregationInput";
import { SchoolsScalarWhereWithAggregatesInput } from "../../../inputs/SchoolsScalarWhereWithAggregatesInput";
import { SchoolsWhereInput } from "../../../inputs/SchoolsWhereInput";
import { SchoolsScalarFieldEnum } from "../../../../enums/SchoolsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySchoolsArgs {
  @TypeGraphQL.Field(_type => SchoolsWhereInput, {
    nullable: true
  })
  where?: SchoolsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SchoolsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SchoolsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchoolsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"school_id" | "school_name" | "school_category" | "school_cnpj" | "school_address" | "school_number" | "school_neighborhood" | "school_city" | "school_state" | "school_cep" | "school_phone" | "school_email" | "school_created_at" | "school_updated_at" | "school_situation">;

  @TypeGraphQL.Field(_type => SchoolsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SchoolsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
