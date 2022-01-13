import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurriculumsOrderByWithRelationInput } from "../../../inputs/CurriculumsOrderByWithRelationInput";
import { CurriculumsWhereInput } from "../../../inputs/CurriculumsWhereInput";
import { CurriculumsWhereUniqueInput } from "../../../inputs/CurriculumsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCurriculumsArgs {
  @TypeGraphQL.Field(_type => CurriculumsWhereInput, {
    nullable: true
  })
  where?: CurriculumsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CurriculumsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CurriculumsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CurriculumsWhereUniqueInput, {
    nullable: true
  })
  cursor?: CurriculumsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
