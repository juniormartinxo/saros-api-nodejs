import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurriculumsUpdateManyMutationInput } from "../../../inputs/CurriculumsUpdateManyMutationInput";
import { CurriculumsWhereInput } from "../../../inputs/CurriculumsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCurriculumsArgs {
  @TypeGraphQL.Field(_type => CurriculumsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CurriculumsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CurriculumsWhereInput, {
    nullable: true
  })
  where?: CurriculumsWhereInput | undefined;
}
