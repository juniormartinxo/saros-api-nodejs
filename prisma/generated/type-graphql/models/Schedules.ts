import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Shifts } from "../models/Shifts";

@TypeGraphQL.ObjectType("Schedules", {
  isAbstract: true
})
export class Schedules {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  schedule_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  schedule_name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  schedule_start!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  schedule_end!: Date;

  shift?: Shifts;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  schedule_shift_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  schedule_created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  schedule_updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  schedule_situation!: string;
}
