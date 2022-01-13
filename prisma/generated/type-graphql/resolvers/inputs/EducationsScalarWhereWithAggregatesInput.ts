import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EducationsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EducationsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EducationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EducationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EducationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EducationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  education_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  education_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  education_nickname?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  education_created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  education_updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  education_situation?: StringWithAggregatesFilter | undefined;
}
