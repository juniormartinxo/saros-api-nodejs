import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimesheetsOrderByWithAggregationInput } from "../../../inputs/TimesheetsOrderByWithAggregationInput";
import { TimesheetsScalarWhereWithAggregatesInput } from "../../../inputs/TimesheetsScalarWhereWithAggregatesInput";
import { TimesheetsWhereInput } from "../../../inputs/TimesheetsWhereInput";
import { TimesheetsScalarFieldEnum } from "../../../../enums/TimesheetsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTimesheetsArgs {
  @TypeGraphQL.Field(_type => TimesheetsWhereInput, {
    nullable: true
  })
  where?: TimesheetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TimesheetsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TimesheetsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimesheetsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"timesheet_id" | "timesheet_teacher_id" | "timesheet_class_id" | "timesheet_date" | "timesheet_created_at" | "timesheet_updated_at" | "timesheet_situation">;

  @TypeGraphQL.Field(_type => TimesheetsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TimesheetsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
