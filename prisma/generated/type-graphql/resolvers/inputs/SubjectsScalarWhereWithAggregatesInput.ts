import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SubjectsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SubjectsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SubjectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SubjectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SubjectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SubjectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  subject_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  subject_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  subject_nickname?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => JsonWithAggregatesFilter, {
    nullable: true
  })
  subject_educations?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  subject_created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  subject_updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  subject_situation?: StringWithAggregatesFilter | undefined;
}
