import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumShiftNamesFilter } from "../inputs/NestedEnumShiftNamesFilter";
import { NestedEnumShiftNamesWithAggregatesFilter } from "../inputs/NestedEnumShiftNamesWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ShiftNames } from "../../enums/ShiftNames";

@TypeGraphQL.InputType("EnumShiftNamesWithAggregatesFilter", {
  isAbstract: true
})
export class EnumShiftNamesWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumShiftNamesWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumShiftNamesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumShiftNamesFilter, {
    nullable: true
  })
  _min?: NestedEnumShiftNamesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumShiftNamesFilter, {
    nullable: true
  })
  _max?: NestedEnumShiftNamesFilter | undefined;
}
