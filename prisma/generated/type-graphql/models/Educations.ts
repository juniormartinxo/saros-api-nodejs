import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Classes } from "../models/Classes";
import { EducationsCount } from "../resolvers/outputs/EducationsCount";

@TypeGraphQL.ObjectType("Educations", {
  isAbstract: true
})
export class Educations {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  education_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  education_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  education_nickname!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  education_created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  education_updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  education_situation!: string;

  Classes?: Classes[];

  @TypeGraphQL.Field(_type => EducationsCount, {
    nullable: true
  })
  _count?: EducationsCount | null;
}
