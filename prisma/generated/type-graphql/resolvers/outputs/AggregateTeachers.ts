import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeachersCountAggregate } from "../outputs/TeachersCountAggregate";
import { TeachersMaxAggregate } from "../outputs/TeachersMaxAggregate";
import { TeachersMinAggregate } from "../outputs/TeachersMinAggregate";

@TypeGraphQL.ObjectType("AggregateTeachers", {
  isAbstract: true
})
export class AggregateTeachers {
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
