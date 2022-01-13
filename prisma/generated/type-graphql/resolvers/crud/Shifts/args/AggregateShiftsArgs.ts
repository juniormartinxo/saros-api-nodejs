import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftsOrderByWithRelationInput } from "../../../inputs/ShiftsOrderByWithRelationInput";
import { ShiftsWhereInput } from "../../../inputs/ShiftsWhereInput";
import { ShiftsWhereUniqueInput } from "../../../inputs/ShiftsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateShiftsArgs {
  @TypeGraphQL.Field(_type => ShiftsWhereInput, {
    nullable: true
  })
  where?: ShiftsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShiftsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ShiftsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ShiftsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShiftsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
