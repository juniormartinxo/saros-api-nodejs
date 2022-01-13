import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationsCreateInput } from "../../../inputs/EducationsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateEducationsArgs {
  @TypeGraphQL.Field(_type => EducationsCreateInput, {
    nullable: false
  })
  data!: EducationsCreateInput;
}
