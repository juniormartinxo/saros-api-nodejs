import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchedulesCreateManyShiftInput } from "../inputs/SchedulesCreateManyShiftInput";

@TypeGraphQL.InputType("SchedulesCreateManyShiftInputEnvelope", {
  isAbstract: true
})
export class SchedulesCreateManyShiftInputEnvelope {
  @TypeGraphQL.Field(_type => [SchedulesCreateManyShiftInput], {
    nullable: false
  })
  data!: SchedulesCreateManyShiftInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
