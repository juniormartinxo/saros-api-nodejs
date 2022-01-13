import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DayOfTheWeek } from "../../enums/DayOfTheWeek";
import { ShiftNames } from "../../enums/ShiftNames";

@TypeGraphQL.ObjectType("ShiftsMinAggregate", {
  isAbstract: true
})
export class ShiftsMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shift_id!: string | null;

  @TypeGraphQL.Field(_type => ShiftNames, {
    nullable: true
  })
  shift_name!: "matutino" | "vespertino" | "noturno" | null;

  @TypeGraphQL.Field(_type => DayOfTheWeek, {
    nullable: true
  })
  shift_day_of_week!: "domingo" | "segunda" | "terca" | "quarta" | "quinta" | "sexta" | "sabado" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  shift_number_class_per_day!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  shift_day_of_week_class!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  shift_created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  shift_updated_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shitf_situation!: string | null;
}
