import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulesCreateManyShiftInputEnvelope } from "../inputs/SchedulesCreateManyShiftInputEnvelope";
import { SchedulesCreateOrConnectWithoutShiftInput } from "../inputs/SchedulesCreateOrConnectWithoutShiftInput";
import { SchedulesCreateWithoutShiftInput } from "../inputs/SchedulesCreateWithoutShiftInput";
import { SchedulesScalarWhereInput } from "../inputs/SchedulesScalarWhereInput";
import { SchedulesUpdateManyWithWhereWithoutShiftInput } from "../inputs/SchedulesUpdateManyWithWhereWithoutShiftInput";
import { SchedulesUpdateWithWhereUniqueWithoutShiftInput } from "../inputs/SchedulesUpdateWithWhereUniqueWithoutShiftInput";
import { SchedulesUpsertWithWhereUniqueWithoutShiftInput } from "../inputs/SchedulesUpsertWithWhereUniqueWithoutShiftInput";
import { SchedulesWhereUniqueInput } from "../inputs/SchedulesWhereUniqueInput";

@TypeGraphQL.InputType("SchedulesUpdateManyWithoutShiftInput", {
  isAbstract: true
})
export class SchedulesUpdateManyWithoutShiftInput {
  @TypeGraphQL.Field(_type => [SchedulesCreateWithoutShiftInput], {
    nullable: true
  })
  create?: SchedulesCreateWithoutShiftInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesCreateOrConnectWithoutShiftInput], {
    nullable: true
  })
  connectOrCreate?: SchedulesCreateOrConnectWithoutShiftInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesUpsertWithWhereUniqueWithoutShiftInput], {
    nullable: true
  })
  upsert?: SchedulesUpsertWithWhereUniqueWithoutShiftInput[] | undefined;

  @TypeGraphQL.Field(_type => SchedulesCreateManyShiftInputEnvelope, {
    nullable: true
  })
  createMany?: SchedulesCreateManyShiftInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SchedulesWhereUniqueInput], {
    nullable: true
  })
  set?: SchedulesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SchedulesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesWhereUniqueInput], {
    nullable: true
  })
  delete?: SchedulesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesWhereUniqueInput], {
    nullable: true
  })
  connect?: SchedulesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesUpdateWithWhereUniqueWithoutShiftInput], {
    nullable: true
  })
  update?: SchedulesUpdateWithWhereUniqueWithoutShiftInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesUpdateManyWithWhereWithoutShiftInput], {
    nullable: true
  })
  updateMany?: SchedulesUpdateManyWithWhereWithoutShiftInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchedulesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SchedulesScalarWhereInput[] | undefined;
}
