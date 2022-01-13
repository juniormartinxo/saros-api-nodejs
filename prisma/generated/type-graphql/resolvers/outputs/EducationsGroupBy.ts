import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationsCountAggregate } from "../outputs/EducationsCountAggregate";
import { EducationsMaxAggregate } from "../outputs/EducationsMaxAggregate";
import { EducationsMinAggregate } from "../outputs/EducationsMinAggregate";

@TypeGraphQL.ObjectType("EducationsGroupBy", {
  isAbstract: true
})
export class EducationsGroupBy {
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

  @TypeGraphQL.Field(_type => EducationsCountAggregate, {
    nullable: true
  })
  _count!: EducationsCountAggregate | null;

  @TypeGraphQL.Field(_type => EducationsMinAggregate, {
    nullable: true
  })
  _min!: EducationsMinAggregate | null;

  @TypeGraphQL.Field(_type => EducationsMaxAggregate, {
    nullable: true
  })
  _max!: EducationsMaxAggregate | null;
}
