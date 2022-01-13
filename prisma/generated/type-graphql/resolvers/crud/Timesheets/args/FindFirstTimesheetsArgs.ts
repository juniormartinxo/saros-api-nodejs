import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimesheetsOrderByWithRelationInput } from "../../../inputs/TimesheetsOrderByWithRelationInput";
import { TimesheetsWhereInput } from "../../../inputs/TimesheetsWhereInput";
import { TimesheetsWhereUniqueInput } from "../../../inputs/TimesheetsWhereUniqueInput";
import { TimesheetsScalarFieldEnum } from "../../../../enums/TimesheetsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTimesheetsArgs {
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

  @TypeGraphQL.Field(_type => [TimesheetsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"timesheet_id" | "timesheet_teacher_id" | "timesheet_class_id" | "timesheet_date" | "timesheet_created_at" | "timesheet_updated_at" | "timesheet_situation"> | undefined;
}
