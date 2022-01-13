import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeachersCreateInput } from "../../../inputs/TeachersCreateInput";
import { TeachersUpdateInput } from "../../../inputs/TeachersUpdateInput";
import { TeachersWhereUniqueInput } from "../../../inputs/TeachersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTeachersArgs {
  @TypeGraphQL.Field(_type => TeachersWhereUniqueInput, {
    nullable: false
  })
  where!: TeachersWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeachersCreateInput, {
    nullable: false
  })
  create!: TeachersCreateInput;

  @TypeGraphQL.Field(_type => TeachersUpdateInput, {
    nullable: false
  })
  update!: TeachersUpdateInput;
}
