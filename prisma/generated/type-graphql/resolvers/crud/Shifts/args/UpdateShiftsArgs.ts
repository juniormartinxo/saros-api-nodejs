import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftsUpdateInput } from "../../../inputs/ShiftsUpdateInput";
import { ShiftsWhereUniqueInput } from "../../../inputs/ShiftsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateShiftsArgs {
  @TypeGraphQL.Field(_type => ShiftsUpdateInput, {
    nullable: false
  })
  data!: ShiftsUpdateInput;

  @TypeGraphQL.Field(_type => ShiftsWhereUniqueInput, {
    nullable: false
  })
  where!: ShiftsWhereUniqueInput;
}
