import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchoolsCreateManyInput } from "../../../inputs/SchoolsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySchoolsArgs {
  @TypeGraphQL.Field(_type => [SchoolsCreateManyInput], {
    nullable: false
  })
  data!: SchoolsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
