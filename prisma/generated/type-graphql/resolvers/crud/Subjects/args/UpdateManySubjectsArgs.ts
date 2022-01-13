import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectsUpdateManyMutationInput } from "../../../inputs/SubjectsUpdateManyMutationInput";
import { SubjectsWhereInput } from "../../../inputs/SubjectsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySubjectsArgs {
  @TypeGraphQL.Field(_type => SubjectsUpdateManyMutationInput, {
    nullable: false
  })
  data!: SubjectsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SubjectsWhereInput, {
    nullable: true
  })
  where?: SubjectsWhereInput | undefined;
}
