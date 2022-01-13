import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShiftsArgs } from "./args/AggregateShiftsArgs";
import { Shifts } from "../../../models/Shifts";
import { AggregateShifts } from "../../outputs/AggregateShifts";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Shifts)
export class AggregateShiftsResolver {
  @TypeGraphQL.Query(_returns => AggregateShifts, {
    nullable: false
  })
  async aggregateShifts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateShiftsArgs): Promise<AggregateShifts> {
    return getPrismaFromContext(ctx).shifts.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
