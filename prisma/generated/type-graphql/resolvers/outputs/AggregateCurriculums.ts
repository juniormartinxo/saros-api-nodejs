import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurriculumsCountAggregate } from "../outputs/CurriculumsCountAggregate";
import { CurriculumsMaxAggregate } from "../outputs/CurriculumsMaxAggregate";
import { CurriculumsMinAggregate } from "../outputs/CurriculumsMinAggregate";

@TypeGraphQL.ObjectType("AggregateCurriculums", {
  isAbstract: true
})
export class AggregateCurriculums {
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
