import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchoolsOrderByWithRelationInput } from "../../../inputs/SchoolsOrderByWithRelationInput";
import { SchoolsWhereInput } from "../../../inputs/SchoolsWhereInput";
import { SchoolsWhereUniqueInput } from "../../../inputs/SchoolsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSchoolsArgs {
  @TypeGraphQL.Field(_type => SchoolsWhereInput, {
    nullable: true
  })
  where?: SchoolsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SchoolsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SchoolsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SchoolsWhereUniqueInput, {
    nullable: true
  })
  cursor?: SchoolsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
