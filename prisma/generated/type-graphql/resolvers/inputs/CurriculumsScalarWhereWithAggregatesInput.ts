import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CurriculumsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CurriculumsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CurriculumsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CurriculumsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurriculumsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CurriculumsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurriculumsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CurriculumsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  curriculum_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  curriculum_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  curriculum_class_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  curriculum_created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  curriculum_updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  curriculum_situation?: StringWithAggregatesFilter | undefined;
}
