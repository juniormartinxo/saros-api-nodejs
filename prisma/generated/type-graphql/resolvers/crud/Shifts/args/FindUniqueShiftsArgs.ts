import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftsWhereUniqueInput } from "../../../inputs/ShiftsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueShiftsArgs {
  @TypeGraphQL.Field(_type => ShiftsWhereUniqueInput, {
    nullable: false
  })
  where!: ShiftsWhereUniqueInput;
}
