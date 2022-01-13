import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SchedulesMaxAggregate", {
  isAbstract: true
})
export class SchedulesMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  schedule_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  schedule_name!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  schedule_start!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  schedule_end!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  schedule_shift_id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  schedule_created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  schedule_updated_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  schedule_situation!: string | null;
}
