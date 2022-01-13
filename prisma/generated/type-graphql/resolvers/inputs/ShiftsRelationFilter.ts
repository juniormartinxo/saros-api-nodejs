import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShiftsWhereInput } from "../inputs/ShiftsWhereInput";

@TypeGraphQL.InputType("ShiftsRelationFilter", {
  isAbstract: true
})
export class ShiftsRelationFilter {
  @TypeGraphQL.Field(_type => ShiftsWhereInput, {
    nullable: true
  })
  is?: ShiftsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShiftsWhereInput, {
    nullable: true
  })
  isNot?: ShiftsWhereInput | undefined;
}
