import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TeachersCreateManyInput", {
  isAbstract: true
})
export class TeachersCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teacher_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  teacher_school_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  teacher_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  teacher_nickname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  teacher_email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  teacher_celphone!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  teacher_disciplines_ids!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  teacher_shifts_ids!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  teacher_restrictions!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  teacher_created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  teacher_updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teacher_situation?: string | undefined;
}
