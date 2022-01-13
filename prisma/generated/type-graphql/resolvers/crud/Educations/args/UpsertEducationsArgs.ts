import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationsCreateInput } from "../../../inputs/EducationsCreateInput";
import { EducationsUpdateInput } from "../../../inputs/EducationsUpdateInput";
import { EducationsWhereUniqueInput } from "../../../inputs/EducationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertEducationsArgs {
  @TypeGraphQL.Field(_type => EducationsWhereUniqueInput, {
    nullable: false
  })
  where!: EducationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EducationsCreateInput, {
    nullable: false
  })
  create!: EducationsCreateInput;

  @TypeGraphQL.Field(_type => EducationsUpdateInput, {
    nullable: false
  })
  update!: EducationsUpdateInput;
}
