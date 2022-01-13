import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftsWhereInput } from "../../../inputs/ShiftsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShiftsArgs {
  @TypeGraphQL.Field(_type => ShiftsWhereInput, {
    nullable: true
  })
  where?: ShiftsWhereInput | undefined;
}
