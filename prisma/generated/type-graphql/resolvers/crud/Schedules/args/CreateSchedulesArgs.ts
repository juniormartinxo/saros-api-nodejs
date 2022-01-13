import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulesCreateInput } from "../../../inputs/SchedulesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSchedulesArgs {
  @TypeGraphQL.Field(_type => SchedulesCreateInput, {
    nullable: false
  })
  data!: SchedulesCreateInput;
}
