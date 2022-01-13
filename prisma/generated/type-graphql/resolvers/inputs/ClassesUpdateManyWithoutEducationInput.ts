import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassesCreateManyEducationInputEnvelope } from "../inputs/ClassesCreateManyEducationInputEnvelope";
import { ClassesCreateOrConnectWithoutEducationInput } from "../inputs/ClassesCreateOrConnectWithoutEducationInput";
import { ClassesCreateWithoutEducationInput } from "../inputs/ClassesCreateWithoutEducationInput";
import { ClassesScalarWhereInput } from "../inputs/ClassesScalarWhereInput";
import { ClassesUpdateManyWithWhereWithoutEducationInput } from "../inputs/ClassesUpdateManyWithWhereWithoutEducationInput";
import { ClassesUpdateWithWhereUniqueWithoutEducationInput } from "../inputs/ClassesUpdateWithWhereUniqueWithoutEducationInput";
import { ClassesUpsertWithWhereUniqueWithoutEducationInput } from "../inputs/ClassesUpsertWithWhereUniqueWithoutEducationInput";
import { ClassesWhereUniqueInput } from "../inputs/ClassesWhereUniqueInput";

@TypeGraphQL.InputType("ClassesUpdateManyWithoutEducationInput", {
  isAbstract: true
})
export class ClassesUpdateManyWithoutEducationInput {
  @TypeGraphQL.Field(_type => [ClassesCreateWithoutEducationInput], {
    nullable: true
  })
  create?: ClassesCreateWithoutEducationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassesCreateOrConnectWithoutEducationInput], {
    nullable: true
  })
  connectOrCreate?: ClassesCreateOrConnectWithoutEducationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassesUpsertWithWhereUniqueWithoutEducationInput], {
    nullable: true
  })
  upsert?: ClassesUpsertWithWhereUniqueWithoutEducationInput[] | undefined;

  @TypeGraphQL.Field(_type => ClassesCreateManyEducationInputEnvelope, {
    nullable: true
  })
  createMany?: ClassesCreateManyEducationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ClassesWhereUniqueInput], {
    nullable: true
  })
  set?: ClassesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ClassesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassesWhereUniqueInput], {
    nullable: true
  })
  delete?: ClassesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassesWhereUniqueInput], {
    nullable: true
  })
  connect?: ClassesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassesUpdateWithWhereUniqueWithoutEducationInput], {
    nullable: true
  })
  update?: ClassesUpdateWithWhereUniqueWithoutEducationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassesUpdateManyWithWhereWithoutEducationInput], {
    nullable: true
  })
  updateMany?: ClassesUpdateManyWithWhereWithoutEducationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ClassesScalarWhereInput[] | undefined;
}
