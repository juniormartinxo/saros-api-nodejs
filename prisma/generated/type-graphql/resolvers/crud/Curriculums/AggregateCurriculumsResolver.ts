import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCurriculumsArgs } from "./args/AggregateCurriculumsArgs";
import { Curriculums } from "../../../models/Curriculums";
import { AggregateCurriculums } from "../../outputs/AggregateCurriculums";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Curriculums)
export class AggregateCurriculumsResolver {
  @TypeGraphQL.Query(_returns => AggregateCurriculums, {
    nullable: false
  })
  async aggregateCurriculums(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCurriculumsArgs): Promise<AggregateCurriculums> {
    return getPrismaFromContext(ctx).curriculums.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
