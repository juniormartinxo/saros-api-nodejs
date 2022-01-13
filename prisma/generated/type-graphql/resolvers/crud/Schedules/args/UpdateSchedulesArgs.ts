import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulesUpdateInput } from "../../../inputs/SchedulesUpdateInput";
import { SchedulesWhereUniqueInput } from "../../../inputs/SchedulesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSchedulesArgs {
  @TypeGraphQL.Field(_type => SchedulesUpdateInput, {
    nullable: false
  })
  data!: SchedulesUpdateInput;

  @TypeGraphQL.Field(_type => SchedulesWhereUniqueInput, {
    nullable: false
  })
  where!: SchedulesWhereUniqueInput;
}
