import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulesUpdateManyMutationInput } from "../../../inputs/SchedulesUpdateManyMutationInput";
import { SchedulesWhereInput } from "../../../inputs/SchedulesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySchedulesArgs {
  @TypeGraphQL.Field(_type => SchedulesUpdateManyMutationInput, {
    nullable: false
  })
  data!: SchedulesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SchedulesWhereInput, {
    nullable: true
  })
  where?: SchedulesWhereInput | undefined;
}
