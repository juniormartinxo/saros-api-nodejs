import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyCurriculumsArgs } from "./args/FindManyCurriculumsArgs";
import { Curriculums } from "../../../models/Curriculums";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Curriculums)
export class FindManyCurriculumsResolver {
  @TypeGraphQL.Query(_returns => [Curriculums], {
    nullable: false
  })
  async findManyCurriculums(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCurriculumsArgs): Promise<Curriculums[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).curriculums.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
