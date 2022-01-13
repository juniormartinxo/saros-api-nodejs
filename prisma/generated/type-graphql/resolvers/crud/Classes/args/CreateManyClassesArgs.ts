import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassesCreateManyInput } from "../../../inputs/ClassesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyClassesArgs {
  @TypeGraphQL.Field(_type => [ClassesCreateManyInput], {
    nullable: false
  })
  data!: ClassesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
