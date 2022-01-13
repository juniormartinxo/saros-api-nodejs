import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Timesheets", {
  isAbstract: true
})
export class Timesheets {
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
}
