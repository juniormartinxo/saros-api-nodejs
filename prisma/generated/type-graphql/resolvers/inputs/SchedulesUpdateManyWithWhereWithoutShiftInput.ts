import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulesScalarWhereInput } from "../inputs/SchedulesScalarWhereInput";
import { SchedulesUpdateManyMutationInput } from "../inputs/SchedulesUpdateManyMutationInput";

@TypeGraphQL.InputType("SchedulesUpdateManyWithWhereWithoutShiftInput", {
  isAbstract: true
})
export class SchedulesUpdateManyWithWhereWithoutShiftInput {
  @TypeGraphQL.Field(_type => SchedulesScalarWhereInput, {
    nullable: false
  })
  where!: SchedulesScalarWhereInput;

  @TypeGraphQL.Field(_type => SchedulesUpdateManyMutationInput, {
    nullable: false
  })
  data!: SchedulesUpdateManyMutationInput;
}
