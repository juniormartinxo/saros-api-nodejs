import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeachersUpdateWithoutSchoolInput } from "../inputs/TeachersUpdateWithoutSchoolInput";
import { TeachersWhereUniqueInput } from "../inputs/TeachersWhereUniqueInput";

@TypeGraphQL.InputType("TeachersUpdateWithWhereUniqueWithoutSchoolInput", {
  isAbstract: true
})
export class TeachersUpdateWithWhereUniqueWithoutSchoolInput {
  @TypeGraphQL.Field(_type => TeachersWhereUniqueInput, {
    nullable: false
  })
  where!: TeachersWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeachersUpdateWithoutSchoolInput, {
    nullable: false
  })
  data!: TeachersUpdateWithoutSchoolInput;
}
