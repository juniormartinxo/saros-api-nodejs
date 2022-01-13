import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectsWhereUniqueInput } from "../../../inputs/SubjectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSubjectsArgs {
  @TypeGraphQL.Field(_type => SubjectsWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectsWhereUniqueInput;
}
