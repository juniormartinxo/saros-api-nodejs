import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEducationsArgs } from "./args/AggregateEducationsArgs";
import { Educations } from "../../../models/Educations";
import { AggregateEducations } from "../../outputs/AggregateEducations";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Educations)
export class AggregateEducationsResolver {
  @TypeGraphQL.Query(_returns => AggregateEducations, {
    nullable: false
  })
  async aggregateEducations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEducationsArgs): Promise<AggregateEducations> {
    return getPrismaFromContext(ctx).educations.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
