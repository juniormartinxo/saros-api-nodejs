import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectsCreateManyInput } from "../../../inputs/SubjectsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySubjectsArgs {
  @TypeGraphQL.Field(_type => [SubjectsCreateManyInput], {
    nullable: false
  })
  data!: SubjectsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
