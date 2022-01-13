import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurriculumsWhereUniqueInput } from "../../../inputs/CurriculumsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCurriculumsArgs {
  @TypeGraphQL.Field(_type => CurriculumsWhereUniqueInput, {
    nullable: false
  })
  where!: CurriculumsWhereUniqueInput;
}
