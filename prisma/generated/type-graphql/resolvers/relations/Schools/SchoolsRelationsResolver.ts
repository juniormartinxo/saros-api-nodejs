import * as TypeGraphQL from "type-graphql";
import { Schools } from "../../../models/Schools";
import { Teachers } from "../../../models/Teachers";
import { SchoolsTeachersArgs } from "./args/SchoolsTeachersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Schools)
export class SchoolsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Teachers], {
    nullable: false
  })
  async Teachers(@TypeGraphQL.Root() schools: Schools, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SchoolsTeachersArgs): Promise<Teachers[]> {
    return getPrismaFromContext(ctx).schools.findUnique({
      where: {
        school_id: schools.school_id,
      },
    }).Teachers(args);
  }
}
