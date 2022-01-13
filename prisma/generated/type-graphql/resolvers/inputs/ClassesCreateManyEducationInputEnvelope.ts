import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassesCreateManyEducationInput } from "../inputs/ClassesCreateManyEducationInput";

@TypeGraphQL.InputType("ClassesCreateManyEducationInputEnvelope", {
  isAbstract: true
})
export class ClassesCreateManyEducationInputEnvelope {
  @TypeGraphQL.Field(_type => [ClassesCreateManyEducationInput], {
    nullable: false
  })
  data!: ClassesCreateManyEducationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
