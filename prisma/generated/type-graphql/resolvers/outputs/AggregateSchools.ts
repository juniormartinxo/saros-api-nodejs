import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolsCountAggregate } from "../outputs/SchoolsCountAggregate";
import { SchoolsMaxAggregate } from "../outputs/SchoolsMaxAggregate";
import { SchoolsMinAggregate } from "../outputs/SchoolsMinAggregate";

@TypeGraphQL.ObjectType("AggregateSchools", {
  isAbstract: true
})
export class AggregateSchools {
  @TypeGraphQL.Field(_type => SchoolsCountAggregate, {
    nullable: true
  })
  _count!: SchoolsCountAggregate | null;

  @TypeGraphQL.Field(_type => SchoolsMinAggregate, {
    nullable: true
  })
  _min!: SchoolsMinAggregate | null;

  @TypeGraphQL.Field(_type => SchoolsMaxAggregate, {
    nullable: true
  })
  _max!: SchoolsMaxAggregate | null;
}
