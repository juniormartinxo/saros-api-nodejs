import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeachersCreateManySchoolInputEnvelope } from "../inputs/TeachersCreateManySchoolInputEnvelope";
import { TeachersCreateOrConnectWithoutSchoolInput } from "../inputs/TeachersCreateOrConnectWithoutSchoolInput";
import { TeachersCreateWithoutSchoolInput } from "../inputs/TeachersCreateWithoutSchoolInput";
import { TeachersScalarWhereInput } from "../inputs/TeachersScalarWhereInput";
import { TeachersUpdateManyWithWhereWithoutSchoolInput } from "../inputs/TeachersUpdateManyWithWhereWithoutSchoolInput";
import { TeachersUpdateWithWhereUniqueWithoutSchoolInput } from "../inputs/TeachersUpdateWithWhereUniqueWithoutSchoolInput";
import { TeachersUpsertWithWhereUniqueWithoutSchoolInput } from "../inputs/TeachersUpsertWithWhereUniqueWithoutSchoolInput";
import { TeachersWhereUniqueInput } from "../inputs/TeachersWhereUniqueInput";

@TypeGraphQL.InputType("TeachersUpdateManyWithoutSchoolInput", {
  isAbstract: true
})
export class TeachersUpdateManyWithoutSchoolInput {
  @TypeGraphQL.Field(_type => [TeachersCreateWithoutSchoolInput], {
    nullable: true
  })
  create?: TeachersCreateWithoutSchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeachersCreateOrConnectWithoutSchoolInput], {
    nullable: true
  })
  connectOrCreate?: TeachersCreateOrConnectWithoutSchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeachersUpsertWithWhereUniqueWithoutSchoolInput], {
    nullable: true
  })
  upsert?: TeachersUpsertWithWhereUniqueWithoutSchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => TeachersCreateManySchoolInputEnvelope, {
    nullable: true
  })
  createMany?: TeachersCreateManySchoolInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TeachersWhereUniqueInput], {
    nullable: true
  })
  set?: TeachersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeachersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TeachersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeachersWhereUniqueInput], {
    nullable: true
  })
  delete?: TeachersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeachersWhereUniqueInput], {
    nullable: true
  })
  connect?: TeachersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeachersUpdateWithWhereUniqueWithoutSchoolInput], {
    nullable: true
  })
  update?: TeachersUpdateWithWhereUniqueWithoutSchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeachersUpdateManyWithWhereWithoutSchoolInput], {
    nullable: true
  })
  updateMany?: TeachersUpdateManyWithWhereWithoutSchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeachersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TeachersScalarWhereInput[] | undefined;
}
