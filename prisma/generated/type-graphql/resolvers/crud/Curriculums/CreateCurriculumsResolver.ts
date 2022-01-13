import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateCurriculumsArgs } from "./args/CreateCurriculumsArgs";
import { Curriculums } from "../../../models/Curriculums";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Curriculums)
export class CreateCurriculumsResolver {
  @TypeGraphQL.Mutation(_returns => Curriculums, {
    nullable: false
  })
  async createCurriculums(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCurriculumsArgs): Promise<Curriculums> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).curriculums.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
