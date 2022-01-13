import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertTimesheetsArgs } from "./args/UpsertTimesheetsArgs";
import { Timesheets } from "../../../models/Timesheets";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Timesheets)
export class UpsertTimesheetsResolver {
  @TypeGraphQL.Mutation(_returns => Timesheets, {
    nullable: false
  })
  async upsertTimesheets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertTimesheetsArgs): Promise<Timesheets> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).timesheets.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
