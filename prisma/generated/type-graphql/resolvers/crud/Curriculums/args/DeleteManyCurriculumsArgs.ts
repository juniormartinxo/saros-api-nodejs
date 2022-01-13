import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurriculumsWhereInput } from "../../../inputs/CurriculumsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCurriculumsArgs {
  @TypeGraphQL.Field(_type => CurriculumsWhereInput, {
    nullable: true
  })
  where?: CurriculumsWhereInput | undefined;
}
