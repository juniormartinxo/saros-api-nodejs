import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TeachersWhereUniqueInput", {
  isAbstract: true
})
export class TeachersWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teacher_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teacher_email?: string | undefined;
}
