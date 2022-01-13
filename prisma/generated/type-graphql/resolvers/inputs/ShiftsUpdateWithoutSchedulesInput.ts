import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumDayOfTheWeekFieldUpdateOperationsInput } from "../inputs/EnumDayOfTheWeekFieldUpdateOperationsInput";
import { EnumShiftNamesFieldUpdateOperationsInput } from "../inputs/EnumShiftNamesFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ShiftsUpdateWithoutSchedulesInput", {
  isAbstract: true
})
export class ShiftsUpdateWithoutSchedulesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  shift_id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumShiftNamesFieldUpdateOperationsInput, {
    nullable: true
  })
  shift_name?: EnumShiftNamesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumDayOfTheWeekFieldUpdateOperationsInput, {
    nullable: true
  })
  shift_day_of_week?: EnumDayOfTheWeekFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  shift_number_class_per_day?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  shift_day_of_week_class?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  shift_created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  shift_updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  shitf_situation?: StringFieldUpdateOperationsInput | undefined;
}
