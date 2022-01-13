import * as TypeGraphQL from "type-graphql";
import { Schools } from "../../../models/Schools";
import { Teachers } from "../../../models/Teachers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Teachers)
export class TeachersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Schools, {
    nullable: false
  })
  async school(@TypeGraphQL.Root() teachers: Teachers, @TypeGraphQL.Ctx() ctx: any): Promise<Schools> {
    return getPrismaFromContext(ctx).teachers.findUnique({
      where: {
        teacher_id: teachers.teacher_id,
      },
    }).school({});
  }
}
