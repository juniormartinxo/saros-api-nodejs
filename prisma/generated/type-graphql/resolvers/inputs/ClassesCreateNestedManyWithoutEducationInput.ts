import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassesCreateManyEducationInputEnvelope } from "../inputs/ClassesCreateManyEducationInputEnvelope";
import { ClassesCreateOrConnectWithoutEducationInput } from "../inputs/ClassesCreateOrConnectWithoutEducationInput";
import { ClassesCreateWithoutEducationInput } from "../inputs/ClassesCreateWithoutEducationInput";
import { ClassesWhereUniqueInput } from "../inputs/ClassesWhereUniqueInput";

@TypeGraphQL.InputType("ClassesCreateNestedManyWithoutEducationInput", {
  isAbstract: true
})
export class ClassesCreateNestedManyWithoutEducationInput {
  @TypeGraphQL.Field(_type => [ClassesCreateWithoutEducationInput], {
    nullable: true
  })
  create?: ClassesCreateWithoutEducationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassesCreateOrConnectWithoutEducationInput], {
    nullable: true
  })
  connectOrCreate?: ClassesCreateOrConnectWithoutEducationInput[] | undefined;

  @TypeGraphQL.Field(_type => ClassesCreateManyEducationInputEnvelope, {
    nullable: true
  })
  createMany?: ClassesCreateManyEducationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ClassesWhereUniqueInput], {
    nullable: true
  })
  connect?: ClassesWhereUniqueInput[] | undefined;
}
