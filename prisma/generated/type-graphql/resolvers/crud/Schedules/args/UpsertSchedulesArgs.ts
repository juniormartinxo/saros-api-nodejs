import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulesCreateInput } from "../../../inputs/SchedulesCreateInput";
import { SchedulesUpdateInput } from "../../../inputs/SchedulesUpdateInput";
import { SchedulesWhereUniqueInput } from "../../../inputs/SchedulesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSchedulesArgs {
  @TypeGraphQL.Field(_type => SchedulesWhereUniqueInput, {
    nullable: false
  })
  where!: SchedulesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchedulesCreateInput, {
    nullable: false
  })
  create!: SchedulesCreateInput;

  @TypeGraphQL.Field(_type => SchedulesUpdateInput, {
    nullable: false
  })
  update!: SchedulesUpdateInput;
}
