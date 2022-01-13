import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeachersCreateInput } from "../../../inputs/TeachersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTeachersArgs {
  @TypeGraphQL.Field(_type => TeachersCreateInput, {
    nullable: false
  })
  data!: TeachersCreateInput;
}
