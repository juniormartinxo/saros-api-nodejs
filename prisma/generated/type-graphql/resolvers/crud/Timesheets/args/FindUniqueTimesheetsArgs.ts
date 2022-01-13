import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimesheetsWhereUniqueInput } from "../../../inputs/TimesheetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTimesheetsArgs {
  @TypeGraphQL.Field(_type => TimesheetsWhereUniqueInput, {
    nullable: false
  })
  where!: TimesheetsWhereUniqueInput;
}
