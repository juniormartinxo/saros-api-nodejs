import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimesheetsUpdateManyMutationInput } from "../../../inputs/TimesheetsUpdateManyMutationInput";
import { TimesheetsWhereInput } from "../../../inputs/TimesheetsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTimesheetsArgs {
  @TypeGraphQL.Field(_type => TimesheetsUpdateManyMutationInput, {
    nullable: false
  })
  data!: TimesheetsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TimesheetsWhereInput, {
    nullable: true
  })
  where?: TimesheetsWhereInput | undefined;
}
