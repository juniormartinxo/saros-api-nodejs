import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TimesheetsCreateInput", {
  isAbstract: true
})
export class TimesheetsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timesheet_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timesheet_teacher_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timesheet_class_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  timesheet_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  timesheet_created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  timesheet_updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timesheet_situation?: string | undefined;
}
