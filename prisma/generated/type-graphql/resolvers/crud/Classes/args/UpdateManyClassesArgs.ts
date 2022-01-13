import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassesUpdateManyMutationInput } from "../../../inputs/ClassesUpdateManyMutationInput";
import { ClassesWhereInput } from "../../../inputs/ClassesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyClassesArgs {
  @TypeGraphQL.Field(_type => ClassesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ClassesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ClassesWhereInput, {
    nullable: true
  })
  where?: ClassesWhereInput | undefined;
}
