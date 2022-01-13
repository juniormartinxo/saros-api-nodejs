import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CurriculumsWhereInput", {
  isAbstract: true
})
export class CurriculumsWhereInput {
  @TypeGraphQL.Field(_type => [CurriculumsWhereInput], {
    nullable: true
  })
  AND?: CurriculumsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurriculumsWhereInput], {
    nullable: true
  })
  OR?: CurriculumsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurriculumsWhereInput], {
    nullable: true
  })
  NOT?: CurriculumsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  curriculum_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  curriculum_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  curriculum_class_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  curriculum_created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  curriculum_updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  curriculum_situation?: StringFilter | undefined;
}
