import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Subjects", {
  isAbstract: true
})
export class Subjects {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subject_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subject_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subject_nickname!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  subject_educations!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  subject_created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  subject_updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subject_situation!: string;
}
