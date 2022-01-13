import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectsUpdateInput } from "../../../inputs/SubjectsUpdateInput";
import { SubjectsWhereUniqueInput } from "../../../inputs/SubjectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSubjectsArgs {
  @TypeGraphQL.Field(_type => SubjectsUpdateInput, {
    nullable: false
  })
  data!: SubjectsUpdateInput;

  @TypeGraphQL.Field(_type => SubjectsWhereUniqueInput, {
    nullable: false
  })
  where!: SubjectsWhereUniqueInput;
}
