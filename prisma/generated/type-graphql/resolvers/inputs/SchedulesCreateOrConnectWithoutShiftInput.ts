import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulesCreateWithoutShiftInput } from "../inputs/SchedulesCreateWithoutShiftInput";
import { SchedulesWhereUniqueInput } from "../inputs/SchedulesWhereUniqueInput";

@TypeGraphQL.InputType("SchedulesCreateOrConnectWithoutShiftInput", {
  isAbstract: true
})
export class SchedulesCreateOrConnectWithoutShiftInput {
  @TypeGraphQL.Field(_type => SchedulesWhereUniqueInput, {
    nullable: false
  })
  where!: SchedulesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchedulesCreateWithoutShiftInput, {
    nullable: false
  })
  create!: SchedulesCreateWithoutShiftInput;
}
