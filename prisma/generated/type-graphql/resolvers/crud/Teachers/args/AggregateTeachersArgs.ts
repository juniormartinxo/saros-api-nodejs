import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeachersOrderByWithRelationInput } from "../../../inputs/TeachersOrderByWithRelationInput";
import { TeachersWhereInput } from "../../../inputs/TeachersWhereInput";
import { TeachersWhereUniqueInput } from "../../../inputs/TeachersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTeachersArgs {
  @TypeGraphQL.Field(_type => TeachersWhereInput, {
    nullable: true
  })
  where?: TeachersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TeachersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TeachersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TeachersWhereUniqueInput, {
    nullable: true
  })
  cursor?: TeachersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
