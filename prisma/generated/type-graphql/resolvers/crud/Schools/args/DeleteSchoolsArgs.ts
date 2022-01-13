import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchoolsWhereUniqueInput } from "../../../inputs/SchoolsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSchoolsArgs {
  @TypeGraphQL.Field(_type => SchoolsWhereUniqueInput, {
    nullable: false
  })
  where!: SchoolsWhereUniqueInput;
}
