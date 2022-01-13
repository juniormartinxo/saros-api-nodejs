import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulesCountAggregate } from "../outputs/SchedulesCountAggregate";
import { SchedulesMaxAggregate } from "../outputs/SchedulesMaxAggregate";
import { SchedulesMinAggregate } from "../outputs/SchedulesMinAggregate";

@TypeGraphQL.ObjectType("SchedulesGroupBy", {
  isAbstract: true
})
export class SchedulesGroupBy {
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

  @TypeGraphQL.Field(_type => SchedulesCountAggregate, {
    nullable: true
  })
  _count!: SchedulesCountAggregate | null;

  @TypeGraphQL.Field(_type => SchedulesMinAggregate, {
    nullable: true
  })
  _min!: SchedulesMinAggregate | null;

  @TypeGraphQL.Field(_type => SchedulesMaxAggregate, {
    nullable: true
  })
  _max!: SchedulesMaxAggregate | null;
}
