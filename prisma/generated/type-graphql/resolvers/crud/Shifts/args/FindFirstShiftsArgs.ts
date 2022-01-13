import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftsOrderByWithRelationInput } from "../../../inputs/ShiftsOrderByWithRelationInput";
import { ShiftsWhereInput } from "../../../inputs/ShiftsWhereInput";
import { ShiftsWhereUniqueInput } from "../../../inputs/ShiftsWhereUniqueInput";
import { ShiftsScalarFieldEnum } from "../../../../enums/ShiftsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstShiftsArgs {
  @TypeGraphQL.Field(_type => ShiftsWhereInput, {
    nullable: true
  })
  where?: ShiftsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShiftsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ShiftsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ShiftsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShiftsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ShiftsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"shift_id" | "shift_name" | "shift_day_of_week" | "shift_number_class_per_day" | "shift_day_of_week_class" | "shift_created_at" | "shift_updated_at" | "shitf_situation"> | undefined;
}
