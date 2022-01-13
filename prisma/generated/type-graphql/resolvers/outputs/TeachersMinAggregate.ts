import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TeachersMinAggregate", {
  isAbstract: true
})
export class TeachersMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teacher_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teacher_school_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teacher_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teacher_nickname!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teacher_email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teacher_celphone!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  teacher_created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  teacher_updated_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teacher_situation!: string | null;
}
