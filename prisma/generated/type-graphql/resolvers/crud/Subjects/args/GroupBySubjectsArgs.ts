import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectsOrderByWithAggregationInput } from "../../../inputs/SubjectsOrderByWithAggregationInput";
import { SubjectsScalarWhereWithAggregatesInput } from "../../../inputs/SubjectsScalarWhereWithAggregatesInput";
import { SubjectsWhereInput } from "../../../inputs/SubjectsWhereInput";
import { SubjectsScalarFieldEnum } from "../../../../enums/SubjectsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySubjectsArgs {
  @TypeGraphQL.Field(_type => SubjectsWhereInput, {
    nullable: true
  })
  where?: SubjectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubjectsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SubjectsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"subject_id" | "subject_name" | "subject_nickname" | "subject_educations" | "subject_created_at" | "subject_updated_at" | "subject_situation">;

  @TypeGraphQL.Field(_type => SubjectsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SubjectsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
