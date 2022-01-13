import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationsCreateWithoutClassesInput } from "../inputs/EducationsCreateWithoutClassesInput";
import { EducationsWhereUniqueInput } from "../inputs/EducationsWhereUniqueInput";

@TypeGraphQL.InputType("EducationsCreateOrConnectWithoutClassesInput", {
  isAbstract: true
})
export class EducationsCreateOrConnectWithoutClassesInput {
  @TypeGraphQL.Field(_type => EducationsWhereUniqueInput, {
    nullable: false
  })
  where!: EducationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EducationsCreateWithoutClassesInput, {
    nullable: false
  })
  create!: EducationsCreateWithoutClassesInput;
}
