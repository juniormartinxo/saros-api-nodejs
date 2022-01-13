import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchoolsCreateInput } from "../../../inputs/SchoolsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSchoolsArgs {
  @TypeGraphQL.Field(_type => SchoolsCreateInput, {
    nullable: false
  })
  data!: SchoolsCreateInput;
}
