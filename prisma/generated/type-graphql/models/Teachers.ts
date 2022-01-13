import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Schools } from "../models/Schools";

@TypeGraphQL.ObjectType("Teachers", {
  isAbstract: true
})
export class Teachers {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  teacher_id!: string;

  school?: Schools;

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
  teacher_disciplines_ids!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  teacher_shifts_ids!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  teacher_restrictions!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  teacher_created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  teacher_updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  teacher_situation!: string;
}
