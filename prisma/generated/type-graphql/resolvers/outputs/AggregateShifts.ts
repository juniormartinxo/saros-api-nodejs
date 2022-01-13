import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShiftsAvgAggregate } from "../outputs/ShiftsAvgAggregate";
import { ShiftsCountAggregate } from "../outputs/ShiftsCountAggregate";
import { ShiftsMaxAggregate } from "../outputs/ShiftsMaxAggregate";
import { ShiftsMinAggregate } from "../outputs/ShiftsMinAggregate";
import { ShiftsSumAggregate } from "../outputs/ShiftsSumAggregate";

@TypeGraphQL.ObjectType("AggregateShifts", {
  isAbstract: true
})
export class AggregateShifts {
  @TypeGraphQL.Field(_type => ShiftsCountAggregate, {
    nullable: true
  })
  _count!: ShiftsCountAggregate | null;

  @TypeGraphQL.Field(_type => ShiftsAvgAggregate, {
    nullable: true
  })
  _avg!: ShiftsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ShiftsSumAggregate, {
    nullable: true
  })
  _sum!: ShiftsSumAggregate | null;

  @TypeGraphQL.Field(_type => ShiftsMinAggregate, {
    nullable: true
  })
  _min!: ShiftsMinAggregate | null;

  @TypeGraphQL.Field(_type => ShiftsMaxAggregate, {
    nullable: true
  })
  _max!: ShiftsMaxAggregate | null;
}
