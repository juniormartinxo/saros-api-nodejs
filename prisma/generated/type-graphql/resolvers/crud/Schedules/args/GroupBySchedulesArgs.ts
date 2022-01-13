import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulesOrderByWithAggregationInput } from "../../../inputs/SchedulesOrderByWithAggregationInput";
import { SchedulesScalarWhereWithAggregatesInput } from "../../../inputs/SchedulesScalarWhereWithAggregatesInput";
import { SchedulesWhereInput } from "../../../inputs/SchedulesWhereInput";
import { SchedulesScalarFieldEnum } from "../../../../enums/SchedulesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySchedulesArgs {
  @TypeGraphQL.Field(_type => SchedulesWhereInput, {
    nullable: true
  })
  where?: SchedulesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SchedulesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SchedulesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"schedule_id" | "schedule_name" | "schedule_start" | "schedule_end" | "schedule_shift_id" | "schedule_created_at" | "schedule_updated_at" | "schedule_situation">;

  @TypeGraphQL.Field(_type => SchedulesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SchedulesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
