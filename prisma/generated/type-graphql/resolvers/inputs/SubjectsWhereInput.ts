import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SubjectsWhereInput", {
  isAbstract: true
})
export class SubjectsWhereInput {
  @TypeGraphQL.Field(_type => [SubjectsWhereInput], {
    nullable: true
  })
  AND?: SubjectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectsWhereInput], {
    nullable: true
  })
  OR?: SubjectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubjectsWhereInput], {
    nullable: true
  })
  NOT?: SubjectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  subject_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  subject_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  subject_nickname?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  subject_educations?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  subject_created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  subject_updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  subject_situation?: StringFilter | undefined;
}
