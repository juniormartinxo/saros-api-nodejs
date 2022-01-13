import * as TypeGraphQL from "type-graphql";
import { Classes } from "../../../models/Classes";
import { Educations } from "../../../models/Educations";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Classes)
export class ClassesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Educations, {
    nullable: false
  })
  async education(@TypeGraphQL.Root() classes: Classes, @TypeGraphQL.Ctx() ctx: any): Promise<Educations> {
    return getPrismaFromContext(ctx).classes.findUnique({
      where: {
        class_id: classes.class_id,
      },
    }).education({});
  }
}
