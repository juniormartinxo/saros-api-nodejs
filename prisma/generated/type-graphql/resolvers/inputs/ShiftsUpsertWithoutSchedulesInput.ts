import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShiftsCreateWithoutSchedulesInput } from "../inputs/ShiftsCreateWithoutSchedulesInput";
import { ShiftsUpdateWithoutSchedulesInput } from "../inputs/ShiftsUpdateWithoutSchedulesInput";

@TypeGraphQL.InputType("ShiftsUpsertWithoutSchedulesInput", {
  isAbstract: true
})
export class ShiftsUpsertWithoutSchedulesInput {
  @TypeGraphQL.Field(_type => ShiftsUpdateWithoutSchedulesInput, {
    nullable: false
  })
  update!: ShiftsUpdateWithoutSchedulesInput;

  @TypeGraphQL.Field(_type => ShiftsCreateWithoutSchedulesInput, {
    nullable: false
  })
  create!: ShiftsCreateWithoutSchedulesInput;
}
