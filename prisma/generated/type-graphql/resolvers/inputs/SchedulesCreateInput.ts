import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShiftsCreateNestedOneWithoutSchedulesInput } from "../inputs/ShiftsCreateNestedOneWithoutSchedulesInput";

@TypeGraphQL.InputType("SchedulesCreateInput", {
  isAbstract: true
})
export class SchedulesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  schedule_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  schedule_name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  schedule_start!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  schedule_end!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  schedule_created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  schedule_updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  schedule_situation?: string | undefined;

  @TypeGraphQL.Field(_type => ShiftsCreateNestedOneWithoutSchedulesInput, {
    nullable: false
  })
  shift!: ShiftsCreateNestedOneWithoutSchedulesInput;
}
