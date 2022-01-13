import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftsCreateInput } from "../../../inputs/ShiftsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateShiftsArgs {
  @TypeGraphQL.Field(_type => ShiftsCreateInput, {
    nullable: false
  })
  data!: ShiftsCreateInput;
}
