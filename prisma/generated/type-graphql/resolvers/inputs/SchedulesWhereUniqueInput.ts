import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SchedulesWhereUniqueInput", {
  isAbstract: true
})
export class SchedulesWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  schedule_id?: string | undefined;
}
