import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulesWhereInput } from "../inputs/SchedulesWhereInput";

@TypeGraphQL.InputType("SchedulesListRelationFilter", {
  isAbstract: true
})
export class SchedulesListRelationFilter {
  @TypeGraphQL.Field(_type => SchedulesWhereInput, {
    nullable: true
  })
  every?: SchedulesWhereInput | undefined;

  @TypeGraphQL.Field(_type => SchedulesWhereInput, {
    nullable: true
  })
  some?: SchedulesWhereInput | undefined;

  @TypeGraphQL.Field(_type => SchedulesWhereInput, {
    nullable: true
  })
  none?: SchedulesWhereInput | undefined;
}
