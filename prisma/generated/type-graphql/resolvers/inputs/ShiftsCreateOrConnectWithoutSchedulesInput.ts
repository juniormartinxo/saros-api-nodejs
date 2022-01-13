import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShiftsCreateWithoutSchedulesInput } from "../inputs/ShiftsCreateWithoutSchedulesInput";
import { ShiftsWhereUniqueInput } from "../inputs/ShiftsWhereUniqueInput";

@TypeGraphQL.InputType("ShiftsCreateOrConnectWithoutSchedulesInput", {
  isAbstract: true
})
export class ShiftsCreateOrConnectWithoutSchedulesInput {
  @TypeGraphQL.Field(_type => ShiftsWhereUniqueInput, {
    nullable: false
  })
  where!: ShiftsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShiftsCreateWithoutSchedulesInput, {
    nullable: false
  })
  create!: ShiftsCreateWithoutSchedulesInput;
}
