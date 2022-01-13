import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShiftNames } from "../../enums/ShiftNames";

@TypeGraphQL.InputType("NestedEnumShiftNamesFilter", {
  isAbstract: true
})
export class NestedEnumShiftNamesFilter {
  @TypeGraphQL.Field(_type => ShiftNames, {
    nullable: true
  })
  equals?: "matutino" | "vespertino" | "noturno" | undefined;

  @TypeGraphQL.Field(_type => [ShiftNames], {
    nullable: true
  })
  in?: Array<"matutino" | "vespertino" | "noturno"> | undefined;

  @TypeGraphQL.Field(_type => [ShiftNames], {
    nullable: true
  })
  notIn?: Array<"matutino" | "vespertino" | "noturno"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumShiftNamesFilter, {
    nullable: true
  })
  not?: NestedEnumShiftNamesFilter | undefined;
}
