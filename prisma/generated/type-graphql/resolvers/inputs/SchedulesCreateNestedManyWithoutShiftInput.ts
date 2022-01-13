import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulesCreateManyShiftInputEnvelope } from "../inputs/SchedulesCreateManyShiftInputEnvelope";
import { SchedulesCreateOrConnectWithoutShiftInput } from "../inputs/SchedulesCreateOrConnectWithoutShiftInput";
import { SchedulesCreateWithoutShiftInput } from "../inputs/SchedulesCreateWithoutShiftInput";
import { SchedulesWhereUniqueInput } from "../inputs/SchedulesWhereUniqueInput";

@TypeGraphQL.InputType("SchedulesCreateNestedManyWithoutShiftInput", {
  isAbstract: true
})
export class SchedulesCreateNestedManyWithoutShiftInput {
  @TypeGraphQL.Field(_type => [SchedulesCreateWithoutShiftInput], {
    nullable: true
  })
  create?: SchedulesCreateWithoutShiftInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesCreateOrConnectWithoutShiftInput], {
    nullable: true
  })
  connectOrCreate?: SchedulesCreateOrConnectWithoutShiftInput[] | undefined;

  @TypeGraphQL.Field(_type => SchedulesCreateManyShiftInputEnvelope, {
    nullable: true
  })
  createMany?: SchedulesCreateManyShiftInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SchedulesWhereUniqueInput], {
    nullable: true
  })
  connect?: SchedulesWhereUniqueInput[] | undefined;
}
