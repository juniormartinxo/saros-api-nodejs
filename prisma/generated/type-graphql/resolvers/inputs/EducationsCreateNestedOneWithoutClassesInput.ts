import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationsCreateOrConnectWithoutClassesInput } from "../inputs/EducationsCreateOrConnectWithoutClassesInput";
import { EducationsCreateWithoutClassesInput } from "../inputs/EducationsCreateWithoutClassesInput";
import { EducationsWhereUniqueInput } from "../inputs/EducationsWhereUniqueInput";

@TypeGraphQL.InputType("EducationsCreateNestedOneWithoutClassesInput", {
  isAbstract: true
})
export class EducationsCreateNestedOneWithoutClassesInput {
  @TypeGraphQL.Field(_type => EducationsCreateWithoutClassesInput, {
    nullable: true
  })
  create?: EducationsCreateWithoutClassesInput | undefined;

  @TypeGraphQL.Field(_type => EducationsCreateOrConnectWithoutClassesInput, {
    nullable: true
  })
  connectOrCreate?: EducationsCreateOrConnectWithoutClassesInput | undefined;

  @TypeGraphQL.Field(_type => EducationsWhereUniqueInput, {
    nullable: true
  })
  connect?: EducationsWhereUniqueInput | undefined;
}
