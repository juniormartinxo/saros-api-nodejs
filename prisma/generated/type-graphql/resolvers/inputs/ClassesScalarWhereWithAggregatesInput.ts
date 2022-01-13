import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ClassesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ClassesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ClassesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ClassesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ClassesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ClassesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  class_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  class_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => JsonWithAggregatesFilter, {
    nullable: true
  })
  class_teachers_ids?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  class_education_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  class_created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  class_updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  class_situation?: StringWithAggregatesFilter | undefined;
}
