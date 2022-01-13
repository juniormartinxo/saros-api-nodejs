import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimesheetsCountAggregate } from "../outputs/TimesheetsCountAggregate";
import { TimesheetsMaxAggregate } from "../outputs/TimesheetsMaxAggregate";
import { TimesheetsMinAggregate } from "../outputs/TimesheetsMinAggregate";

@TypeGraphQL.ObjectType("TimesheetsGroupBy", {
  isAbstract: true
})
export class TimesheetsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timesheet_id!: string;

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
    nullable: false
  })
  timesheet_created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  timesheet_updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timesheet_situation!: string;

  @TypeGraphQL.Field(_type => TimesheetsCountAggregate, {
    nullable: true
  })
  _count!: TimesheetsCountAggregate | null;

  @TypeGraphQL.Field(_type => TimesheetsMinAggregate, {
    nullable: true
  })
  _min!: TimesheetsMinAggregate | null;

  @TypeGraphQL.Field(_type => TimesheetsMaxAggregate, {
    nullable: true
  })
  _max!: TimesheetsMaxAggregate | null;
}
