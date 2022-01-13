import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimesheetsCreateManyInput } from "../../../inputs/TimesheetsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTimesheetsArgs {
  @TypeGraphQL.Field(_type => [TimesheetsCreateManyInput], {
    nullable: false
  })
  data!: TimesheetsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
