import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { SchoolsRelationFilter } from "../inputs/SchoolsRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TeachersWhereInput", {
  isAbstract: true
})
export class TeachersWhereInput {
  @TypeGraphQL.Field(_type => [TeachersWhereInput], {
    nullable: true
  })
  AND?: TeachersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeachersWhereInput], {
    nullable: true
  })
  OR?: TeachersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeachersWhereInput], {
    nullable: true
  })
  NOT?: TeachersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  teacher_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => SchoolsRelationFilter, {
    nullable: true
  })
  school?: SchoolsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  teacher_school_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  teacher_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  teacher_nickname?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  teacher_email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  teacher_celphone?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  teacher_disciplines_ids?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  teacher_shifts_ids?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  teacher_restrictions?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  teacher_created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  teacher_updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  teacher_situation?: StringFilter | undefined;
}
