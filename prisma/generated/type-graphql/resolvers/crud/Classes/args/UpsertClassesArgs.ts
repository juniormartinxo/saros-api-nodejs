import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassesCreateInput } from "../../../inputs/ClassesCreateInput";
import { ClassesUpdateInput } from "../../../inputs/ClassesUpdateInput";
import { ClassesWhereUniqueInput } from "../../../inputs/ClassesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertClassesArgs {
  @TypeGraphQL.Field(_type => ClassesWhereUniqueInput, {
    nullable: false
  })
  where!: ClassesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClassesCreateInput, {
    nullable: false
  })
  create!: ClassesCreateInput;

  @TypeGraphQL.Field(_type => ClassesUpdateInput, {
    nullable: false
  })
  update!: ClassesUpdateInput;
}
