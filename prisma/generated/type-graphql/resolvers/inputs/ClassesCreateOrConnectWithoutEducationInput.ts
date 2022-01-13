import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassesCreateWithoutEducationInput } from "../inputs/ClassesCreateWithoutEducationInput";
import { ClassesWhereUniqueInput } from "../inputs/ClassesWhereUniqueInput";

@TypeGraphQL.InputType("ClassesCreateOrConnectWithoutEducationInput", {
  isAbstract: true
})
export class ClassesCreateOrConnectWithoutEducationInput {
  @TypeGraphQL.Field(_type => ClassesWhereUniqueInput, {
    nullable: false
  })
  where!: ClassesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClassesCreateWithoutEducationInput, {
    nullable: false
  })
  create!: ClassesCreateWithoutEducationInput;
}
