import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulesCreateManyInput } from "../../../inputs/SchedulesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySchedulesArgs {
  @TypeGraphQL.Field(_type => [SchedulesCreateManyInput], {
    nullable: false
  })
  data!: SchedulesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
