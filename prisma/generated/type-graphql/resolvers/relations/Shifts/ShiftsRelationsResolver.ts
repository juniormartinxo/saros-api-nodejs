import * as TypeGraphQL from "type-graphql";
import { Schedules } from "../../../models/Schedules";
import { Shifts } from "../../../models/Shifts";
import { ShiftsSchedulesArgs } from "./args/ShiftsSchedulesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shifts)
export class ShiftsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Schedules], {
    nullable: false
  })
  async Schedules(@TypeGraphQL.Root() shifts: Shifts, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ShiftsSchedulesArgs): Promise<Schedules[]> {
    return getPrismaFromContext(ctx).shifts.findUnique({
      where: {
        shift_id: shifts.shift_id,
      },
    }).Schedules(args);
  }
}
