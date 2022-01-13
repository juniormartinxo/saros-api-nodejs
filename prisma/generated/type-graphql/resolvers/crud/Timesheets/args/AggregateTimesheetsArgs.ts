import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimesheetsOrderByWithRelationInput } from "../../../inputs/TimesheetsOrderByWithRelationInput";
import { TimesheetsWhereInput } from "../../../inputs/TimesheetsWhereInput";
import { TimesheetsWhereUniqueInput } from "../../../inputs/TimesheetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTimesheetsArgs {
  @TypeGraphQL.Field(_type => TimesheetsWhereInput, {
    nullable: true
  })
  where?: TimesheetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TimesheetsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TimesheetsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TimesheetsWhereUniqueInput, {
    nullable: true
  })
  cursor?: TimesheetsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
