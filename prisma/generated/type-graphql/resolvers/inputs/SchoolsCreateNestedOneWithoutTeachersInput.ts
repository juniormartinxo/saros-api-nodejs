import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolsCreateOrConnectWithoutTeachersInput } from "../inputs/SchoolsCreateOrConnectWithoutTeachersInput";
import { SchoolsCreateWithoutTeachersInput } from "../inputs/SchoolsCreateWithoutTeachersInput";
import { SchoolsWhereUniqueInput } from "../inputs/SchoolsWhereUniqueInput";

@TypeGraphQL.InputType("SchoolsCreateNestedOneWithoutTeachersInput", {
  isAbstract: true
})
export class SchoolsCreateNestedOneWithoutTeachersInput {
  @TypeGraphQL.Field(_type => SchoolsCreateWithoutTeachersInput, {
    nullable: true
  })
  create?: SchoolsCreateWithoutTeachersInput | undefined;

  @TypeGraphQL.Field(_type => SchoolsCreateOrConnectWithoutTeachersInput, {
    nullable: true
  })
  connectOrCreate?: SchoolsCreateOrConnectWithoutTeachersInput | undefined;

  @TypeGraphQL.Field(_type => SchoolsWhereUniqueInput, {
    nullable: true
  })
  connect?: SchoolsWhereUniqueInput | undefined;
}
