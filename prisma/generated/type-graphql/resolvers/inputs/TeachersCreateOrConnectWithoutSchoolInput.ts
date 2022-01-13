import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeachersCreateWithoutSchoolInput } from "../inputs/TeachersCreateWithoutSchoolInput";
import { TeachersWhereUniqueInput } from "../inputs/TeachersWhereUniqueInput";

@TypeGraphQL.InputType("TeachersCreateOrConnectWithoutSchoolInput", {
  isAbstract: true
})
export class TeachersCreateOrConnectWithoutSchoolInput {
  @TypeGraphQL.Field(_type => TeachersWhereUniqueInput, {
    nullable: false
  })
  where!: TeachersWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeachersCreateWithoutSchoolInput, {
    nullable: false
  })
  create!: TeachersCreateWithoutSchoolInput;
}
