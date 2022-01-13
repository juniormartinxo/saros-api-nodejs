import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationsCreateWithoutClassesInput } from "../inputs/EducationsCreateWithoutClassesInput";
import { EducationsUpdateWithoutClassesInput } from "../inputs/EducationsUpdateWithoutClassesInput";

@TypeGraphQL.InputType("EducationsUpsertWithoutClassesInput", {
  isAbstract: true
})
export class EducationsUpsertWithoutClassesInput {
  @TypeGraphQL.Field(_type => EducationsUpdateWithoutClassesInput, {
    nullable: false
  })
  update!: EducationsUpdateWithoutClassesInput;

  @TypeGraphQL.Field(_type => EducationsCreateWithoutClassesInput, {
    nullable: false
  })
  create!: EducationsCreateWithoutClassesInput;
}
