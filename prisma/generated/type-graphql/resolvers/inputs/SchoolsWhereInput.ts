import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumCategoryFilter } from "../inputs/EnumCategoryFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TeachersListRelationFilter } from "../inputs/TeachersListRelationFilter";

@TypeGraphQL.InputType("SchoolsWhereInput", {
  isAbstract: true
})
export class SchoolsWhereInput {
  @TypeGraphQL.Field(_type => [SchoolsWhereInput], {
    nullable: true
  })
  AND?: SchoolsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchoolsWhereInput], {
    nullable: true
  })
  OR?: SchoolsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchoolsWhereInput], {
    nullable: true
  })
  NOT?: SchoolsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  school_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  school_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumCategoryFilter, {
    nullable: true
  })
  school_category?: EnumCategoryFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  school_cnpj?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  school_address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  school_number?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  school_neighborhood?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  school_city?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  school_state?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  school_cep?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  school_phone?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  school_email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  school_created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  school_updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  school_situation?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TeachersListRelationFilter, {
    nullable: true
  })
  Teachers?: TeachersListRelationFilter | undefined;
}
