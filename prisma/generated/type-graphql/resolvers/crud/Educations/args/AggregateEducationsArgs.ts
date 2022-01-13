import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationsOrderByWithRelationInput } from "../../../inputs/EducationsOrderByWithRelationInput";
import { EducationsWhereInput } from "../../../inputs/EducationsWhereInput";
import { EducationsWhereUniqueInput } from "../../../inputs/EducationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEducationsArgs {
  @TypeGraphQL.Field(_type => EducationsWhereInput, {
    nullable: true
  })
  where?: EducationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EducationsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EducationsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EducationsWhereUniqueInput, {
    nullable: true
  })
  cursor?: EducationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
