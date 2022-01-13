import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShiftNames } from "../../enums/ShiftNames";

@TypeGraphQL.InputType("EnumShiftNamesFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumShiftNamesFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ShiftNames, {
    nullable: true
  })
  set?: "matutino" | "vespertino" | "noturno" | undefined;
}
