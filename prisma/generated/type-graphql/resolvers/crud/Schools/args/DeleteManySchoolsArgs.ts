import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchoolsWhereInput } from "../../../inputs/SchoolsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySchoolsArgs {
  @TypeGraphQL.Field(_type => SchoolsWhereInput, {
    nullable: true
  })
  where?: SchoolsWhereInput | undefined;
}
