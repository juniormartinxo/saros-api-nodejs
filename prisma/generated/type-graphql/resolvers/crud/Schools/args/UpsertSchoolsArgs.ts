import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchoolsCreateInput } from "../../../inputs/SchoolsCreateInput";
import { SchoolsUpdateInput } from "../../../inputs/SchoolsUpdateInput";
import { SchoolsWhereUniqueInput } from "../../../inputs/SchoolsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSchoolsArgs {
  @TypeGraphQL.Field(_type => SchoolsWhereUniqueInput, {
    nullable: false
  })
  where!: SchoolsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchoolsCreateInput, {
    nullable: false
  })
  create!: SchoolsCreateInput;

  @TypeGraphQL.Field(_type => SchoolsUpdateInput, {
    nullable: false
  })
  update!: SchoolsUpdateInput;
}
