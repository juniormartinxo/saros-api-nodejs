import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectsCountAggregate } from "../outputs/SubjectsCountAggregate";
import { SubjectsMaxAggregate } from "../outputs/SubjectsMaxAggregate";
import { SubjectsMinAggregate } from "../outputs/SubjectsMinAggregate";

@TypeGraphQL.ObjectType("AggregateSubjects", {
  isAbstract: true
})
export class AggregateSubjects {
  @TypeGraphQL.Field(_type => SubjectsCountAggregate, {
    nullable: true
  })
  _count!: SubjectsCountAggregate | null;

  @TypeGraphQL.Field(_type => SubjectsMinAggregate, {
    nullable: true
  })
  _min!: SubjectsMinAggregate | null;

  @TypeGraphQL.Field(_type => SubjectsMaxAggregate, {
    nullable: true
  })
  _max!: SubjectsMaxAggregate | null;
}
