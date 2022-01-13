import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeachersCreateManyInput } from "../../../inputs/TeachersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTeachersArgs {
  @TypeGraphQL.Field(_type => [TeachersCreateManyInput], {
    nullable: false
  })
  data!: TeachersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
