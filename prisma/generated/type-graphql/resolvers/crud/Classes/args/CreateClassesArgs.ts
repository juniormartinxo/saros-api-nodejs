import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassesCreateInput } from "../../../inputs/ClassesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateClassesArgs {
  @TypeGraphQL.Field(_type => ClassesCreateInput, {
    nullable: false
  })
  data!: ClassesCreateInput;
}
