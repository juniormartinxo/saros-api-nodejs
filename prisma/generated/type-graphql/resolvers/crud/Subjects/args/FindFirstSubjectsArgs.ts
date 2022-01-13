import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubjectsOrderByWithRelationInput } from "../../../inputs/SubjectsOrderByWithRelationInput";
import { SubjectsWhereInput } from "../../../inputs/SubjectsWhereInput";
import { SubjectsWhereUniqueInput } from "../../../inputs/SubjectsWhereUniqueInput";
import { SubjectsScalarFieldEnum } from "../../../../enums/SubjectsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSubjectsArgs {
  @TypeGraphQL.Field(_type => SubjectsWhereInput, {
    nullable: true
  })
  where?: SubjectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubjectsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SubjectsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SubjectsWhereUniqueInput, {
    nullable: true
  })
  cursor?: SubjectsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SubjectsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"subject_id" | "subject_name" | "subject_nickname" | "subject_educations" | "subject_created_at" | "subject_updated_at" | "subject_situation"> | undefined;
}
