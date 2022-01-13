import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftsOrderByWithAggregationInput } from "../../../inputs/ShiftsOrderByWithAggregationInput";
import { ShiftsScalarWhereWithAggregatesInput } from "../../../inputs/ShiftsScalarWhereWithAggregatesInput";
import { ShiftsWhereInput } from "../../../inputs/ShiftsWhereInput";
import { ShiftsScalarFieldEnum } from "../../../../enums/ShiftsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShiftsArgs {
  @TypeGraphQL.Field(_type => ShiftsWhereInput, {
    nullable: true
  })
  where?: ShiftsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShiftsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ShiftsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShiftsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"shift_id" | "shift_name" | "shift_day_of_week" | "shift_number_class_per_day" | "shift_day_of_week_class" | "shift_created_at" | "shift_updated_at" | "shitf_situation">;

  @TypeGraphQL.Field(_type => ShiftsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ShiftsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
