import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassesScalarWhereInput } from "../inputs/ClassesScalarWhereInput";
import { ClassesUpdateManyMutationInput } from "../inputs/ClassesUpdateManyMutationInput";

@TypeGraphQL.InputType("ClassesUpdateManyWithWhereWithoutEducationInput", {
  isAbstract: true
})
export class ClassesUpdateManyWithWhereWithoutEducationInput {
  @TypeGraphQL.Field(_type => ClassesScalarWhereInput, {
    nullable: false
  })
  where!: ClassesScalarWhereInput;

  @TypeGraphQL.Field(_type => ClassesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ClassesUpdateManyMutationInput;
}
