import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TimesheetsWhereUniqueInput", {
  isAbstract: true
})
export class TimesheetsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timesheet_id?: string | undefined;
}
