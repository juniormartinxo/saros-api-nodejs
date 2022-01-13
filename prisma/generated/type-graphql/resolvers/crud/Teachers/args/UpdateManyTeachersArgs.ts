import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeachersUpdateManyMutationInput } from "../../../inputs/TeachersUpdateManyMutationInput";
import { TeachersWhereInput } from "../../../inputs/TeachersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTeachersArgs {
  @TypeGraphQL.Field(_type => TeachersUpdateManyMutationInput, {
    nullable: false
  })
  data!: TeachersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TeachersWhereInput, {
    nullable: true
  })
  where?: TeachersWhereInput | undefined;
}
