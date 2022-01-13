import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimesheetsCreateInput } from "../../../inputs/TimesheetsCreateInput";
import { TimesheetsUpdateInput } from "../../../inputs/TimesheetsUpdateInput";
import { TimesheetsWhereUniqueInput } from "../../../inputs/TimesheetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTimesheetsArgs {
  @TypeGraphQL.Field(_type => TimesheetsWhereUniqueInput, {
    nullable: false
  })
  where!: TimesheetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimesheetsCreateInput, {
    nullable: false
  })
  create!: TimesheetsCreateInput;

  @TypeGraphQL.Field(_type => TimesheetsUpdateInput, {
    nullable: false
  })
  update!: TimesheetsUpdateInput;
}
