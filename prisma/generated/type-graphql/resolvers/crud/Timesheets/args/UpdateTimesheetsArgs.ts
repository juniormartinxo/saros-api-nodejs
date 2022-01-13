import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimesheetsUpdateInput } from "../../../inputs/TimesheetsUpdateInput";
import { TimesheetsWhereUniqueInput } from "../../../inputs/TimesheetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTimesheetsArgs {
  @TypeGraphQL.Field(_type => TimesheetsUpdateInput, {
    nullable: false
  })
  data!: TimesheetsUpdateInput;

  @TypeGraphQL.Field(_type => TimesheetsWhereUniqueInput, {
    nullable: false
  })
  where!: TimesheetsWhereUniqueInput;
}
