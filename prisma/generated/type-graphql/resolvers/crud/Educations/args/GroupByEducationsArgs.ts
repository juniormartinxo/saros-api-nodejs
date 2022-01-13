import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationsOrderByWithAggregationInput } from "../../../inputs/EducationsOrderByWithAggregationInput";
import { EducationsScalarWhereWithAggregatesInput } from "../../../inputs/EducationsScalarWhereWithAggregatesInput";
import { EducationsWhereInput } from "../../../inputs/EducationsWhereInput";
import { EducationsScalarFieldEnum } from "../../../../enums/EducationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEducationsArgs {
  @TypeGraphQL.Field(_type => EducationsWhereInput, {
    nullable: true
  })
  where?: EducationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EducationsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EducationsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"education_id" | "education_name" | "education_nickname" | "education_created_at" | "education_updated_at" | "education_situation">;

  @TypeGraphQL.Field(_type => EducationsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EducationsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
