import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulesUpdateWithoutShiftInput } from "../inputs/SchedulesUpdateWithoutShiftInput";
import { SchedulesWhereUniqueInput } from "../inputs/SchedulesWhereUniqueInput";

@TypeGraphQL.InputType("SchedulesUpdateWithWhereUniqueWithoutShiftInput", {
  isAbstract: true
})
export class SchedulesUpdateWithWhereUniqueWithoutShiftInput {
  @TypeGraphQL.Field(_type => SchedulesWhereUniqueInput, {
    nullable: false
  })
  where!: SchedulesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchedulesUpdateWithoutShiftInput, {
    nullable: false
  })
  data!: SchedulesUpdateWithoutShiftInput;
}
