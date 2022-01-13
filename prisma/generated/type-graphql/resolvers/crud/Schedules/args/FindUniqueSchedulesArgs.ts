import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulesWhereUniqueInput } from "../../../inputs/SchedulesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSchedulesArgs {
  @TypeGraphQL.Field(_type => SchedulesWhereUniqueInput, {
    nullable: false
  })
  where!: SchedulesWhereUniqueInput;
}
