import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulesCountAggregate } from "../outputs/SchedulesCountAggregate";
import { SchedulesMaxAggregate } from "../outputs/SchedulesMaxAggregate";
import { SchedulesMinAggregate } from "../outputs/SchedulesMinAggregate";

@TypeGraphQL.ObjectType("AggregateSchedules", {
  isAbstract: true
})
export class AggregateSchedules {
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
