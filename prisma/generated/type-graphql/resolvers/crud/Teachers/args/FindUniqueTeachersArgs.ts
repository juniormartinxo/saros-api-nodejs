import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeachersWhereUniqueInput } from "../../../inputs/TeachersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTeachersArgs {
  @TypeGraphQL.Field(_type => TeachersWhereUniqueInput, {
    nullable: false
  })
  where!: TeachersWhereUniqueInput;
}
