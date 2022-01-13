import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeachersCreateManySchoolInput } from "../inputs/TeachersCreateManySchoolInput";

@TypeGraphQL.InputType("TeachersCreateManySchoolInputEnvelope", {
  isAbstract: true
})
export class TeachersCreateManySchoolInputEnvelope {
  @TypeGraphQL.Field(_type => [TeachersCreateManySchoolInput], {
    nullable: false
  })
  data!: TeachersCreateManySchoolInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
