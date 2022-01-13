import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Schedules } from "../models/Schedules";
import { DayOfTheWeek } from "../enums/DayOfTheWeek";
import { ShiftNames } from "../enums/ShiftNames";
import { ShiftsCount } from "../resolvers/outputs/ShiftsCount";

@TypeGraphQL.ObjectType("Shifts", {
  isAbstract: true
})
export class Shifts {
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

  Schedules?: Schedules[];

  @TypeGraphQL.Field(_type => ShiftsCount, {
    nullable: true
  })
  _count?: ShiftsCount | null;
}
