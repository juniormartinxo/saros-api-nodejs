import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassesUpdateInput } from "../../../inputs/ClassesUpdateInput";
import { ClassesWhereUniqueInput } from "../../../inputs/ClassesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateClassesArgs {
  @TypeGraphQL.Field(_type => ClassesUpdateInput, {
    nullable: false
  })
  data!: ClassesUpdateInput;

  @TypeGraphQL.Field(_type => ClassesWhereUniqueInput, {
    nullable: false
  })
  where!: ClassesWhereUniqueInput;
}
