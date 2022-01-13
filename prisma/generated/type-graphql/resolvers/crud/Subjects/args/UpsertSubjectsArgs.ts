import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectsCreateInput } from "../../../inputs/SubjectsCreateInput";
import { SubjectsUpdateInput } from "../../../inputs/SubjectsUpdateInput";
import { SubjectsWhereUniqueInput } from "../../../inputs/SubjectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSubjectsArgs {
  @TypeGraphQL.Field(_type => SubjectsWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubjectsCreateInput, {
    nullable: false
  })
  create!: SubjectsCreateInput;

  @TypeGraphQL.Field(_type => SubjectsUpdateInput, {
    nullable: false
  })
  update!: SubjectsUpdateInput;
}
