import * as TypeGraphQL from "type-graphql";
import { Schedules } from "../../../models/Schedules";
import { Shifts } from "../../../models/Shifts";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Schedules)
export class SchedulesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Shifts, {
    nullable: false
  })
  async shift(@TypeGraphQL.Root() schedules: Schedules, @TypeGraphQL.Ctx() ctx: any): Promise<Shifts> {
    return getPrismaFromContext(ctx).schedules.findUnique({
      where: {
        schedule_id: schedules.schedule_id,
      },
    }).shift({});
  }
}
