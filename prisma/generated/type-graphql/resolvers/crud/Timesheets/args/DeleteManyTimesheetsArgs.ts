import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimesheetsWhereInput } from "../../../inputs/TimesheetsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTimesheetsArgs {
  @TypeGraphQL.Field(_type => TimesheetsWhereInput, {
    nullable: true
  })
  where?: TimesheetsWhereInput | undefined;
}
