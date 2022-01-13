import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassesCreateWithoutEducationInput } from "../inputs/ClassesCreateWithoutEducationInput";
import { ClassesUpdateWithoutEducationInput } from "../inputs/ClassesUpdateWithoutEducationInput";
import { ClassesWhereUniqueInput } from "../inputs/ClassesWhereUniqueInput";

@TypeGraphQL.InputType("ClassesUpsertWithWhereUniqueWithoutEducationInput", {
  isAbstract: true
})
export class ClassesUpsertWithWhereUniqueWithoutEducationInput {
  @TypeGraphQL.Field(_type => ClassesWhereUniqueInput, {
    nullable: false
  })
  where!: ClassesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClassesUpdateWithoutEducationInput, {
    nullable: false
  })
  update!: ClassesUpdateWithoutEducationInput;

  @TypeGraphQL.Field(_type => ClassesCreateWithoutEducationInput, {
    nullable: false
  })
  create!: ClassesCreateWithoutEducationInput;
}
