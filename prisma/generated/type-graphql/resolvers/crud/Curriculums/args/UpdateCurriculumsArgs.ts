import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurriculumsUpdateInput } from "../../../inputs/CurriculumsUpdateInput";
import { CurriculumsWhereUniqueInput } from "../../../inputs/CurriculumsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCurriculumsArgs {
  @TypeGraphQL.Field(_type => CurriculumsUpdateInput, {
    nullable: false
  })
  data!: CurriculumsUpdateInput;

  @TypeGraphQL.Field(_type => CurriculumsWhereUniqueInput, {
    nullable: false
  })
  where!: CurriculumsWhereUniqueInput;
}
