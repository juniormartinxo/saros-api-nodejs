import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassesCountAggregate } from "../outputs/ClassesCountAggregate";
import { ClassesMaxAggregate } from "../outputs/ClassesMaxAggregate";
import { ClassesMinAggregate } from "../outputs/ClassesMinAggregate";

@TypeGraphQL.ObjectType("AggregateClasses", {
  isAbstract: true
})
export class AggregateClasses {
  @TypeGraphQL.Field(_type => ClassesCountAggregate, {
    nullable: true
  })
  _count!: ClassesCountAggregate | null;

  @TypeGraphQL.Field(_type => ClassesMinAggregate, {
    nullable: true
  })
  _min!: ClassesMinAggregate | null;

  @TypeGraphQL.Field(_type => ClassesMaxAggregate, {
    nullable: true
  })
  _max!: ClassesMaxAggregate | null;
}
