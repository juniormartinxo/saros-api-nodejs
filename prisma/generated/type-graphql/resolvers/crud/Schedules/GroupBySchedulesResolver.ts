import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySchedulesArgs } from "./args/GroupBySchedulesArgs";
import { Schedules } from "../../../models/Schedules";
import { SchedulesGroupBy } from "../../outputs/SchedulesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Schedules)
export class GroupBySchedulesResolver {
  @TypeGraphQL.Query(_returns => [SchedulesGroupBy], {
    nullable: false
  })
  async groupBySchedules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySchedulesArgs): Promise<SchedulesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).schedules.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
