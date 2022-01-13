import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationsCreateManyInput } from "../../../inputs/EducationsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEducationsArgs {
  @TypeGraphQL.Field(_type => [EducationsCreateManyInput], {
    nullable: false
  })
  data!: EducationsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
