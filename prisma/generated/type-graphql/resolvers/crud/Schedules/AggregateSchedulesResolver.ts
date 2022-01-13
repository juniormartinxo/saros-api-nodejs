import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSchedulesArgs } from "./args/AggregateSchedulesArgs";
import { Schedules } from "../../../models/Schedules";
import { AggregateSchedules } from "../../outputs/AggregateSchedules";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Schedules)
export class AggregateSchedulesResolver {
  @TypeGraphQL.Query(_returns => AggregateSchedules, {
    nullable: false
  })
  async aggregateSchedules(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSchedulesArgs): Promise<AggregateSchedules> {
    return getPrismaFromContext(ctx).schedules.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
