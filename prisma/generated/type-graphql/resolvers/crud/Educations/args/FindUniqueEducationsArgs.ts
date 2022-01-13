import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationsWhereUniqueInput } from "../../../inputs/EducationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEducationsArgs {
  @TypeGraphQL.Field(_type => EducationsWhereUniqueInput, {
    nullable: false
  })
  where!: EducationsWhereUniqueInput;
}
