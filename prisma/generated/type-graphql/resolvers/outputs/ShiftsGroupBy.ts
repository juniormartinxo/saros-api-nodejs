import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShiftsAvgAggregate } from "../outputs/ShiftsAvgAggregate";
import { ShiftsCountAggregate } from "../outputs/ShiftsCountAggregate";
import { ShiftsMaxAggregate } from "../outputs/ShiftsMaxAggregate";
import { ShiftsMinAggregate } from "../outputs/ShiftsMinAggregate";
import { ShiftsSumAggregate } from "../outputs/ShiftsSumAggregate";
import { DayOfTheWeek } from "../../enums/DayOfTheWeek";
import { ShiftNames } from "../../enums/ShiftNames";

@TypeGraphQL.ObjectType("ShiftsGroupBy", {
  isAbstract: true
})
export class ShiftsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shift_id!: string;

  @TypeGraphQL.Field(_type => ShiftNames, {
    nullable: false
  })
  shift_name!: "matutino" | "vespertino" | "noturno";

  @TypeGraphQL.Field(_type => DayOfTheWeek, {
    nullable: false
  })
  shift_day_of_week!: "domingo" | "segunda" | "terca" | "quarta" | "quinta" | "sexta" | "sabado";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  shift_number_class_per_day!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  shift_day_of_week_class!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  shift_created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  shift_updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shitf_situation!: string;

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
