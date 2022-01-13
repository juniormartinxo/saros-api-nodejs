import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ClassesScalarWhereInput", {
  isAbstract: true
})
export class ClassesScalarWhereInput {
  @TypeGraphQL.Field(_type => [ClassesScalarWhereInput], {
    nullable: true
  })
  AND?: ClassesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassesScalarWhereInput], {
    nullable: true
  })
  OR?: ClassesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassesScalarWhereInput], {
    nullable: true
  })
  NOT?: ClassesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  class_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  class_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  class_teachers_ids?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  class_education_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  class_created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  class_updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  class_situation?: StringFilter | undefined;
}
