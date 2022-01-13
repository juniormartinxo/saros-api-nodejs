import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulesCreateWithoutShiftInput } from "../inputs/SchedulesCreateWithoutShiftInput";
import { SchedulesUpdateWithoutShiftInput } from "../inputs/SchedulesUpdateWithoutShiftInput";
import { SchedulesWhereUniqueInput } from "../inputs/SchedulesWhereUniqueInput";

@TypeGraphQL.InputType("SchedulesUpsertWithWhereUniqueWithoutShiftInput", {
  isAbstract: true
})
export class SchedulesUpsertWithWhereUniqueWithoutShiftInput {
  @TypeGraphQL.Field(_type => SchedulesWhereUniqueInput, {
    nullable: false
  })
  where!: SchedulesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchedulesUpdateWithoutShiftInput, {
    nullable: false
  })
  update!: SchedulesUpdateWithoutShiftInput;

  @TypeGraphQL.Field(_type => SchedulesCreateWithoutShiftInput, {
    nullable: false
  })
  create!: SchedulesCreateWithoutShiftInput;
}
