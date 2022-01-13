import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchoolsUpdateInput } from "../../../inputs/SchoolsUpdateInput";
import { SchoolsWhereUniqueInput } from "../../../inputs/SchoolsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSchoolsArgs {
  @TypeGraphQL.Field(_type => SchoolsUpdateInput, {
    nullable: false
  })
  data!: SchoolsUpdateInput;

  @TypeGraphQL.Field(_type => SchoolsWhereUniqueInput, {
    nullable: false
  })
  where!: SchoolsWhereUniqueInput;
}
