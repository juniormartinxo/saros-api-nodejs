import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurriculumsCreateManyInput } from "../../../inputs/CurriculumsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCurriculumsArgs {
  @TypeGraphQL.Field(_type => [CurriculumsCreateManyInput], {
    nullable: false
  })
  data!: CurriculumsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
