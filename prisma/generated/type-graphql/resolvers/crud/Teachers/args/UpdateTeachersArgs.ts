import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeachersUpdateInput } from "../../../inputs/TeachersUpdateInput";
import { TeachersWhereUniqueInput } from "../../../inputs/TeachersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTeachersArgs {
  @TypeGraphQL.Field(_type => TeachersUpdateInput, {
    nullable: false
  })
  data!: TeachersUpdateInput;

  @TypeGraphQL.Field(_type => TeachersWhereUniqueInput, {
    nullable: false
  })
  where!: TeachersWhereUniqueInput;
}
