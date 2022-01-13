import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstTimesheetsArgs } from "./args/FindFirstTimesheetsArgs";
import { Timesheets } from "../../../models/Timesheets";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Timesheets)
export class FindFirstTimesheetsResolver {
  @TypeGraphQL.Query(_returns => Timesheets, {
    nullable: true
  })
  async findFirstTimesheets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTimesheetsArgs): Promise<Timesheets | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).timesheets.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
