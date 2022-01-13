import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolsCreateWithoutTeachersInput } from "../inputs/SchoolsCreateWithoutTeachersInput";
import { SchoolsUpdateWithoutTeachersInput } from "../inputs/SchoolsUpdateWithoutTeachersInput";

@TypeGraphQL.InputType("SchoolsUpsertWithoutTeachersInput", {
  isAbstract: true
})
export class SchoolsUpsertWithoutTeachersInput {
  @TypeGraphQL.Field(_type => SchoolsUpdateWithoutTeachersInput, {
    nullable: false
  })
  update!: SchoolsUpdateWithoutTeachersInput;

  @TypeGraphQL.Field(_type => SchoolsCreateWithoutTeachersInput, {
    nullable: false
  })
  create!: SchoolsCreateWithoutTeachersInput;
}
