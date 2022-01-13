import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassesWhereInput } from "../../../inputs/ClassesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyClassesArgs {
  @TypeGraphQL.Field(_type => ClassesWhereInput, {
    nullable: true
  })
  where?: ClassesWhereInput | undefined;
}
