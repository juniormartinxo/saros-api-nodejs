import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftsCreateInput } from "../../../inputs/ShiftsCreateInput";
import { ShiftsUpdateInput } from "../../../inputs/ShiftsUpdateInput";
import { ShiftsWhereUniqueInput } from "../../../inputs/ShiftsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertShiftsArgs {
  @TypeGraphQL.Field(_type => ShiftsWhereUniqueInput, {
    nullable: false
  })
  where!: ShiftsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShiftsCreateInput, {
    nullable: false
  })
  create!: ShiftsCreateInput;

  @TypeGraphQL.Field(_type => ShiftsUpdateInput, {
    nullable: false
  })
  update!: ShiftsUpdateInput;
}
