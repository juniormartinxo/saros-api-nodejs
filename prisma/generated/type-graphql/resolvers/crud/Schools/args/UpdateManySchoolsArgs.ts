import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchoolsUpdateManyMutationInput } from "../../../inputs/SchoolsUpdateManyMutationInput";
import { SchoolsWhereInput } from "../../../inputs/SchoolsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySchoolsArgs {
  @TypeGraphQL.Field(_type => SchoolsUpdateManyMutationInput, {
    nullable: false
  })
  data!: SchoolsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SchoolsWhereInput, {
    nullable: true
  })
  where?: SchoolsWhereInput | undefined;
}
