import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeachersCreateWithoutSchoolInput } from "../inputs/TeachersCreateWithoutSchoolInput";
import { TeachersUpdateWithoutSchoolInput } from "../inputs/TeachersUpdateWithoutSchoolInput";
import { TeachersWhereUniqueInput } from "../inputs/TeachersWhereUniqueInput";

@TypeGraphQL.InputType("TeachersUpsertWithWhereUniqueWithoutSchoolInput", {
  isAbstract: true
})
export class TeachersUpsertWithWhereUniqueWithoutSchoolInput {
  @TypeGraphQL.Field(_type => TeachersWhereUniqueInput, {
    nullable: false
  })
  where!: TeachersWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeachersUpdateWithoutSchoolInput, {
    nullable: false
  })
  update!: TeachersUpdateWithoutSchoolInput;

  @TypeGraphQL.Field(_type => TeachersCreateWithoutSchoolInput, {
    nullable: false
  })
  create!: TeachersCreateWithoutSchoolInput;
}
