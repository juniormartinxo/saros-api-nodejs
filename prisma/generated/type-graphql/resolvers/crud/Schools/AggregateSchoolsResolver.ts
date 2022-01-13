import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSchoolsArgs } from "./args/AggregateSchoolsArgs";
import { Schools } from "../../../models/Schools";
import { AggregateSchools } from "../../outputs/AggregateSchools";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Schools)
export class AggregateSchoolsResolver {
  @TypeGraphQL.Query(_returns => AggregateSchools, {
    nullable: false
  })
  async aggregateSchools(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSchoolsArgs): Promise<AggregateSchools> {
    return getPrismaFromContext(ctx).schools.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
