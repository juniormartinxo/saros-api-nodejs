import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSubjectsArgs } from "./args/AggregateSubjectsArgs";
import { Subjects } from "../../../models/Subjects";
import { AggregateSubjects } from "../../outputs/AggregateSubjects";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Subjects)
export class AggregateSubjectsResolver {
  @TypeGraphQL.Query(_returns => AggregateSubjects, {
    nullable: false
  })
  async aggregateSubjects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSubjectsArgs): Promise<AggregateSubjects> {
    return getPrismaFromContext(ctx).subjects.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
