import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurriculumsOrderByWithAggregationInput } from "../../../inputs/CurriculumsOrderByWithAggregationInput";
import { CurriculumsScalarWhereWithAggregatesInput } from "../../../inputs/CurriculumsScalarWhereWithAggregatesInput";
import { CurriculumsWhereInput } from "../../../inputs/CurriculumsWhereInput";
import { CurriculumsScalarFieldEnum } from "../../../../enums/CurriculumsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCurriculumsArgs {
  @TypeGraphQL.Field(_type => CurriculumsWhereInput, {
    nullable: true
  })
  where?: CurriculumsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CurriculumsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CurriculumsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurriculumsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"curriculum_id" | "curriculum_name" | "curriculum_class_id" | "curriculum_created_at" | "curriculum_updated_at" | "curriculum_situation">;

  @TypeGraphQL.Field(_type => CurriculumsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CurriculumsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
