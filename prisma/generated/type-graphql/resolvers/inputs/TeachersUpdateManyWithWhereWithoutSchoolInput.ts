import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeachersScalarWhereInput } from "../inputs/TeachersScalarWhereInput";
import { TeachersUpdateManyMutationInput } from "../inputs/TeachersUpdateManyMutationInput";

@TypeGraphQL.InputType("TeachersUpdateManyWithWhereWithoutSchoolInput", {
  isAbstract: true
})
export class TeachersUpdateManyWithWhereWithoutSchoolInput {
  @TypeGraphQL.Field(_type => TeachersScalarWhereInput, {
    nullable: false
  })
  where!: TeachersScalarWhereInput;

  @TypeGraphQL.Field(_type => TeachersUpdateManyMutationInput, {
    nullable: false
  })
  data!: TeachersUpdateManyMutationInput;
}
