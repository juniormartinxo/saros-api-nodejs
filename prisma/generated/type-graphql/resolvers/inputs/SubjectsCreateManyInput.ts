import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SubjectsCreateManyInput", {
  isAbstract: true
})
export class SubjectsCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject_id?: string | undefined;

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
  subject_educations!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  subject_created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  subject_updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject_situation?: string | undefined;
}
