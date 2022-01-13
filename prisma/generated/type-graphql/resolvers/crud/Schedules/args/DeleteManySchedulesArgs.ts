import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulesWhereInput } from "../../../inputs/SchedulesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySchedulesArgs {
  @TypeGraphQL.Field(_type => SchedulesWhereInput, {
    nullable: true
  })
  where?: SchedulesWhereInput | undefined;
}
