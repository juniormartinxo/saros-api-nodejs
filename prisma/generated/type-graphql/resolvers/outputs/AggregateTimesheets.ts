import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimesheetsCountAggregate } from "../outputs/TimesheetsCountAggregate";
import { TimesheetsMaxAggregate } from "../outputs/TimesheetsMaxAggregate";
import { TimesheetsMinAggregate } from "../outputs/TimesheetsMinAggregate";

@TypeGraphQL.ObjectType("AggregateTimesheets", {
  isAbstract: true
})
export class AggregateTimesheets {
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
