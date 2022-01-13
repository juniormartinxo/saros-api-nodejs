import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassesUpdateWithoutEducationInput } from "../inputs/ClassesUpdateWithoutEducationInput";
import { ClassesWhereUniqueInput } from "../inputs/ClassesWhereUniqueInput";

@TypeGraphQL.InputType("ClassesUpdateWithWhereUniqueWithoutEducationInput", {
  isAbstract: true
})
export class ClassesUpdateWithWhereUniqueWithoutEducationInput {
  @TypeGraphQL.Field(_type => ClassesWhereUniqueInput, {
    nullable: false
  })
  where!: ClassesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClassesUpdateWithoutEducationInput, {
    nullable: false
  })
  data!: ClassesUpdateWithoutEducationInput;
}
