import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeachersCountAggregate } from "../outputs/TeachersCountAggregate";
import { TeachersMaxAggregate } from "../outputs/TeachersMaxAggregate";
import { TeachersMinAggregate } from "../outputs/TeachersMinAggregate";

@TypeGraphQL.ObjectType("TeachersGroupBy", {
  isAbstract: true
})
export class TeachersGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  teacher_id!: string;

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

  @TypeGraphQL.Field(_type => TeachersCountAggregate, {
    nullable: true
  })
  _count!: TeachersCountAggregate | null;

  @TypeGraphQL.Field(_type => TeachersMinAggregate, {
    nullable: true
  })
  _min!: TeachersMinAggregate | null;

  @TypeGraphQL.Field(_type => TeachersMaxAggregate, {
    nullable: true
  })
  _max!: TeachersMaxAggregate | null;
}
