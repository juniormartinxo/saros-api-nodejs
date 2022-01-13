import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteCurriculumsArgs } from "./args/DeleteCurriculumsArgs";
import { Curriculums } from "../../../models/Curriculums";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Curriculums)
export class DeleteCurriculumsResolver {
  @TypeGraphQL.Mutation(_returns => Curriculums, {
    nullable: true
  })
  async deleteCurriculums(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteCurriculumsArgs): Promise<Curriculums | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).curriculums.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
