import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassesWhereUniqueInput } from "../../../inputs/ClassesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteClassesArgs {
  @TypeGraphQL.Field(_type => ClassesWhereUniqueInput, {
    nullable: false
  })
  where!: ClassesWhereUniqueInput;
}
