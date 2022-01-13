import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimesheetsCreateInput } from "../../../inputs/TimesheetsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTimesheetsArgs {
  @TypeGraphQL.Field(_type => TimesheetsCreateInput, {
    nullable: false
  })
  data!: TimesheetsCreateInput;
}
