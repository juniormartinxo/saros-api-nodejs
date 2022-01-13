import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurriculumsCreateInput } from "../../../inputs/CurriculumsCreateInput";
import { CurriculumsUpdateInput } from "../../../inputs/CurriculumsUpdateInput";
import { CurriculumsWhereUniqueInput } from "../../../inputs/CurriculumsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCurriculumsArgs {
  @TypeGraphQL.Field(_type => CurriculumsWhereUniqueInput, {
    nullable: false
  })
  where!: CurriculumsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CurriculumsCreateInput, {
    nullable: false
  })
  create!: CurriculumsCreateInput;

  @TypeGraphQL.Field(_type => CurriculumsUpdateInput, {
    nullable: false
  })
  update!: CurriculumsUpdateInput;
}
