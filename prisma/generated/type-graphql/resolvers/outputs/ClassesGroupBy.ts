import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClassesCountAggregate } from "../outputs/ClassesCountAggregate";
import { ClassesMaxAggregate } from "../outputs/ClassesMaxAggregate";
import { ClassesMinAggregate } from "../outputs/ClassesMinAggregate";

@TypeGraphQL.ObjectType("ClassesGroupBy", {
  isAbstract: true
})
export class ClassesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  class_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  class_name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  class_teachers_ids!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  class_education_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  class_created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  class_updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  class_situation!: string;

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
