import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateTimesheetsArgs } from "./args/CreateTimesheetsArgs";
import { Timesheets } from "../../../models/Timesheets";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Timesheets)
export class CreateTimesheetsResolver {
  @TypeGraphQL.Mutation(_returns => Timesheets, {
    nullable: false
  })
  async createTimesheets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateTimesheetsArgs): Promise<Timesheets> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).timesheets.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
