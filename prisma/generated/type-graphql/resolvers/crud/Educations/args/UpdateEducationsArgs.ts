import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationsUpdateInput } from "../../../inputs/EducationsUpdateInput";
import { EducationsWhereUniqueInput } from "../../../inputs/EducationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateEducationsArgs {
  @TypeGraphQL.Field(_type => EducationsUpdateInput, {
    nullable: false
  })
  data!: EducationsUpdateInput;

  @TypeGraphQL.Field(_type => EducationsWhereUniqueInput, {
    nullable: false
  })
  where!: EducationsWhereUniqueInput;
}
