import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShiftsCreateOrConnectWithoutSchedulesInput } from "../inputs/ShiftsCreateOrConnectWithoutSchedulesInput";
import { ShiftsCreateWithoutSchedulesInput } from "../inputs/ShiftsCreateWithoutSchedulesInput";
import { ShiftsUpdateWithoutSchedulesInput } from "../inputs/ShiftsUpdateWithoutSchedulesInput";
import { ShiftsUpsertWithoutSchedulesInput } from "../inputs/ShiftsUpsertWithoutSchedulesInput";
import { ShiftsWhereUniqueInput } from "../inputs/ShiftsWhereUniqueInput";

@TypeGraphQL.InputType("ShiftsUpdateOneRequiredWithoutSchedulesInput", {
  isAbstract: true
})
export class ShiftsUpdateOneRequiredWithoutSchedulesInput {
  @TypeGraphQL.Field(_type => ShiftsCreateWithoutSchedulesInput, {
    nullable: true
  })
  create?: ShiftsCreateWithoutSchedulesInput | undefined;

  @TypeGraphQL.Field(_type => ShiftsCreateOrConnectWithoutSchedulesInput, {
    nullable: true
  })
  connectOrCreate?: ShiftsCreateOrConnectWithoutSchedulesInput | undefined;

  @TypeGraphQL.Field(_type => ShiftsUpsertWithoutSchedulesInput, {
    nullable: true
  })
  upsert?: ShiftsUpsertWithoutSchedulesInput | undefined;

  @TypeGraphQL.Field(_type => ShiftsWhereUniqueInput, {
    nullable: true
  })
  connect?: ShiftsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ShiftsUpdateWithoutSchedulesInput, {
    nullable: true
  })
  update?: ShiftsUpdateWithoutSchedulesInput | undefined;
}
