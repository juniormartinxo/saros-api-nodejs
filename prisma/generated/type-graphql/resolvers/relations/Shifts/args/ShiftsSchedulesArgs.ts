import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulesOrderByWithRelationInput } from "../../../inputs/SchedulesOrderByWithRelationInput";
import { SchedulesWhereInput } from "../../../inputs/SchedulesWhereInput";
import { SchedulesWhereUniqueInput } from "../../../inputs/SchedulesWhereUniqueInput";
import { SchedulesScalarFieldEnum } from "../../../../enums/SchedulesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ShiftsSchedulesArgs {
  @TypeGraphQL.Field(_type => SchedulesWhereInput, {
    nullable: true
  })
  where?: SchedulesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SchedulesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SchedulesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SchedulesWhereUniqueInput, {
    nullable: true
  })
  cursor?: SchedulesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SchedulesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"schedule_id" | "schedule_name" | "schedule_start" | "schedule_end" | "schedule_shift_id" | "schedule_created_at" | "schedule_updated_at" | "schedule_situation"> | undefined;
}
