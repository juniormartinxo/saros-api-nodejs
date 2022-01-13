import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Educations } from "../models/Educations";

@TypeGraphQL.ObjectType("Classes", {
  isAbstract: true
})
export class Classes {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  class_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  class_name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  class_teachers_ids!: Prisma.JsonValue;

  education?: Educations;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  class_education_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  class_created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  class_updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  class_situation!: string;
}
