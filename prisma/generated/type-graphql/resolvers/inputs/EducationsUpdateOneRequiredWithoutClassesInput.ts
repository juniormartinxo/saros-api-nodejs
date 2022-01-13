import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationsCreateOrConnectWithoutClassesInput } from "../inputs/EducationsCreateOrConnectWithoutClassesInput";
import { EducationsCreateWithoutClassesInput } from "../inputs/EducationsCreateWithoutClassesInput";
import { EducationsUpdateWithoutClassesInput } from "../inputs/EducationsUpdateWithoutClassesInput";
import { EducationsUpsertWithoutClassesInput } from "../inputs/EducationsUpsertWithoutClassesInput";
import { EducationsWhereUniqueInput } from "../inputs/EducationsWhereUniqueInput";

@TypeGraphQL.InputType("EducationsUpdateOneRequiredWithoutClassesInput", {
  isAbstract: true
})
export class EducationsUpdateOneRequiredWithoutClassesInput {
  @TypeGraphQL.Field(_type => EducationsCreateWithoutClassesInput, {
    nullable: true
  })
  create?: EducationsCreateWithoutClassesInput | undefined;

  @TypeGraphQL.Field(_type => EducationsCreateOrConnectWithoutClassesInput, {
    nullable: true
  })
  connectOrCreate?: EducationsCreateOrConnectWithoutClassesInput | undefined;

  @TypeGraphQL.Field(_type => EducationsUpsertWithoutClassesInput, {
    nullable: true
  })
  upsert?: EducationsUpsertWithoutClassesInput | undefined;

  @TypeGraphQL.Field(_type => EducationsWhereUniqueInput, {
    nullable: true
  })
  connect?: EducationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EducationsUpdateWithoutClassesInput, {
    nullable: true
  })
  update?: EducationsUpdateWithoutClassesInput | undefined;
}
