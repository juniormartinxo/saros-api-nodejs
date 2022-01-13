import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurriculumsCreateInput } from "../../../inputs/CurriculumsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCurriculumsArgs {
  @TypeGraphQL.Field(_type => CurriculumsCreateInput, {
    nullable: false
  })
  data!: CurriculumsCreateInput;
}
