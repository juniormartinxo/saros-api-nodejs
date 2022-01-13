import * as TypeGraphQL from "type-graphql";
import { Classes } from "../../../models/Classes";
import { Educations } from "../../../models/Educations";
import { EducationsClassesArgs } from "./args/EducationsClassesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Educations)
export class EducationsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Classes], {
    nullable: false
  })
  async Classes(@TypeGraphQL.Root() educations: Educations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EducationsClassesArgs): Promise<Classes[]> {
    return getPrismaFromContext(ctx).educations.findUnique({
      where: {
        education_id: educations.education_id,
      },
    }).Classes(args);
  }
}
