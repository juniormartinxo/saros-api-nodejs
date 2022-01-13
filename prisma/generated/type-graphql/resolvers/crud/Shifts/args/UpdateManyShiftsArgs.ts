import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftsUpdateManyMutationInput } from "../../../inputs/ShiftsUpdateManyMutationInput";
import { ShiftsWhereInput } from "../../../inputs/ShiftsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShiftsArgs {
  @TypeGraphQL.Field(_type => ShiftsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShiftsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ShiftsWhereInput, {
    nullable: true
  })
  where?: ShiftsWhereInput | undefined;
}
