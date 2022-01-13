import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectsCreateInput } from "../../../inputs/SubjectsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSubjectsArgs {
  @TypeGraphQL.Field(_type => SubjectsCreateInput, {
    nullable: false
  })
  data!: SubjectsCreateInput;
}
