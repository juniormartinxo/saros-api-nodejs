import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTeachersArgs } from "./args/AggregateTeachersArgs";
import { Teachers } from "../../../models/Teachers";
import { AggregateTeachers } from "../../outputs/AggregateTeachers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Teachers)
export class AggregateTeachersResolver {
  @TypeGraphQL.Query(_returns => AggregateTeachers, {
    nullable: false
  })
  async aggregateTeachers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTeachersArgs): Promise<AggregateTeachers> {
    return getPrismaFromContext(ctx).teachers.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
