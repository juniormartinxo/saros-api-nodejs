import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ShiftsWhereUniqueInput", {
  isAbstract: true
})
export class ShiftsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shift_id?: string | undefined;
}
