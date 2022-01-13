import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectsWhereInput } from "../../../inputs/SubjectsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySubjectsArgs {
  @TypeGraphQL.Field(_type => SubjectsWhereInput, {
    nullable: true
  })
  where?: SubjectsWhereInput | undefined;
}
