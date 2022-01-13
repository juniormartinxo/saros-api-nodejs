import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolsCreateWithoutTeachersInput } from "../inputs/SchoolsCreateWithoutTeachersInput";
import { SchoolsWhereUniqueInput } from "../inputs/SchoolsWhereUniqueInput";

@TypeGraphQL.InputType("SchoolsCreateOrConnectWithoutTeachersInput", {
  isAbstract: true
})
export class SchoolsCreateOrConnectWithoutTeachersInput {
  @TypeGraphQL.Field(_type => SchoolsWhereUniqueInput, {
    nullable: false
  })
  where!: SchoolsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchoolsCreateWithoutTeachersInput, {
    nullable: false
  })
  create!: SchoolsCreateWithoutTeachersInput;
}
