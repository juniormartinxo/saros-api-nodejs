import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShiftsCreateManyInput } from "../../../inputs/ShiftsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShiftsArgs {
  @TypeGraphQL.Field(_type => [ShiftsCreateManyInput], {
    nullable: false
  })
  data!: ShiftsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
