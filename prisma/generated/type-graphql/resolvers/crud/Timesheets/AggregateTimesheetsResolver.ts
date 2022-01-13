import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTimesheetsArgs } from "./args/AggregateTimesheetsArgs";
import { Timesheets } from "../../../models/Timesheets";
import { AggregateTimesheets } from "../../outputs/AggregateTimesheets";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Timesheets)
export class AggregateTimesheetsResolver {
  @TypeGraphQL.Query(_returns => AggregateTimesheets, {
    nullable: false
  })
  async aggregateTimesheets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTimesheetsArgs): Promise<AggregateTimesheets> {
    return getPrismaFromContext(ctx).timesheets.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
