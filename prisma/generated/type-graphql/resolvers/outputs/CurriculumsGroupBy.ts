import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurriculumsCountAggregate } from "../outputs/CurriculumsCountAggregate";
import { CurriculumsMaxAggregate } from "../outputs/CurriculumsMaxAggregate";
import { CurriculumsMinAggregate } from "../outputs/CurriculumsMinAggregate";

@TypeGraphQL.ObjectType("CurriculumsGroupBy", {
  isAbstract: true
})
export class CurriculumsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  curriculum_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  curriculum_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  curriculum_class_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  curriculum_created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  curriculum_updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  curriculum_situation!: string;

  @TypeGraphQL.Field(_type => CurriculumsCountAggregate, {
    nullable: true
  })
  _count!: CurriculumsCountAggregate | null;

  @TypeGraphQL.Field(_type => CurriculumsMinAggregate, {
    nullable: true
  })
  _min!: CurriculumsMinAggregate | null;

  @TypeGraphQL.Field(_type => CurriculumsMaxAggregate, {
    nullable: true
  })
  _max!: CurriculumsMaxAggregate | null;
}
