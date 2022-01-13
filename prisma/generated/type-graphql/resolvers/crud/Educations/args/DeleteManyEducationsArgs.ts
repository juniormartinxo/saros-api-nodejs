import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationsWhereInput } from "../../../inputs/EducationsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEducationsArgs {
  @TypeGraphQL.Field(_type => EducationsWhereInput, {
    nullable: true
  })
  where?: EducationsWhereInput | undefined;
}
