import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationsCountAggregate } from "../outputs/EducationsCountAggregate";
import { EducationsMaxAggregate } from "../outputs/EducationsMaxAggregate";
import { EducationsMinAggregate } from "../outputs/EducationsMinAggregate";

@TypeGraphQL.ObjectType("AggregateEducations", {
  isAbstract: true
})
export class AggregateEducations {
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
