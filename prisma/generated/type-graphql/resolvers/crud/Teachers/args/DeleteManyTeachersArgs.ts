import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeachersWhereInput } from "../../../inputs/TeachersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTeachersArgs {
  @TypeGraphQL.Field(_type => TeachersWhereInput, {
    nullable: true
  })
  where?: TeachersWhereInput | undefined;
}
