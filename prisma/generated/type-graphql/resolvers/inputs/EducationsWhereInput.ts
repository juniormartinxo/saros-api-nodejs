import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassesListRelationFilter } from "../inputs/ClassesListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EducationsWhereInput", {
  isAbstract: true
})
export class EducationsWhereInput {
  @TypeGraphQL.Field(_type => [EducationsWhereInput], {
    nullable: true
  })
  AND?: EducationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationsWhereInput], {
    nullable: true
  })
  OR?: EducationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationsWhereInput], {
    nullable: true
  })
  NOT?: EducationsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  education_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  education_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  education_nickname?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  education_created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  education_updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  education_situation?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ClassesListRelationFilter, {
    nullable: true
  })
  Classes?: ClassesListRelationFilter | undefined;
}
