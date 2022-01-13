import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TimesheetsMaxAggregate", {
  isAbstract: true
})
export class TimesheetsMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timesheet_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timesheet_teacher_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timesheet_class_id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  timesheet_date!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  timesheet_created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  timesheet_updated_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timesheet_situation!: string | null;
}
