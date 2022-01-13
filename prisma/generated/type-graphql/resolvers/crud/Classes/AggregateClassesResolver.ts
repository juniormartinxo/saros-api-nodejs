import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateClassesArgs } from "./args/AggregateClassesArgs";
import { Classes } from "../../../models/Classes";
import { AggregateClasses } from "../../outputs/AggregateClasses";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Classes)
export class AggregateClassesResolver {
  @TypeGraphQL.Query(_returns => AggregateClasses, {
    nullable: false
  })
  async aggregateClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateClassesArgs): Promise<AggregateClasses> {
    return getPrismaFromContext(ctx).classes.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
