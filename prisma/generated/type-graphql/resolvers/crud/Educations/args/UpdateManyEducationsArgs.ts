import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationsUpdateManyMutationInput } from "../../../inputs/EducationsUpdateManyMutationInput";
import { EducationsWhereInput } from "../../../inputs/EducationsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEducationsArgs {
  @TypeGraphQL.Field(_type => EducationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: EducationsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EducationsWhereInput, {
    nullable: true
  })
  where?: EducationsWhereInput | undefined;
}
