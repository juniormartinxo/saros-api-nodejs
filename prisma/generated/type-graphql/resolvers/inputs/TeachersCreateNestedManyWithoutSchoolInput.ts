import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeachersCreateManySchoolInputEnvelope } from "../inputs/TeachersCreateManySchoolInputEnvelope";
import { TeachersCreateOrConnectWithoutSchoolInput } from "../inputs/TeachersCreateOrConnectWithoutSchoolInput";
import { TeachersCreateWithoutSchoolInput } from "../inputs/TeachersCreateWithoutSchoolInput";
import { TeachersWhereUniqueInput } from "../inputs/TeachersWhereUniqueInput";

@TypeGraphQL.InputType("TeachersCreateNestedManyWithoutSchoolInput", {
  isAbstract: true
})
export class TeachersCreateNestedManyWithoutSchoolInput {
  @TypeGraphQL.Field(_type => [TeachersCreateWithoutSchoolInput], {
    nullable: true
  })
  create?: TeachersCreateWithoutSchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeachersCreateOrConnectWithoutSchoolInput], {
    nullable: true
  })
  connectOrCreate?: TeachersCreateOrConnectWithoutSchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => TeachersCreateManySchoolInputEnvelope, {
    nullable: true
  })
  createMany?: TeachersCreateManySchoolInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TeachersWhereUniqueInput], {
    nullable: true
  })
  connect?: TeachersWhereUniqueInput[] | undefined;
}
