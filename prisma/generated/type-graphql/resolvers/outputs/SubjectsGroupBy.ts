import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubjectsCountAggregate } from "../outputs/SubjectsCountAggregate";
import { SubjectsMaxAggregate } from "../outputs/SubjectsMaxAggregate";
import { SubjectsMinAggregate } from "../outputs/SubjectsMinAggregate";

@TypeGraphQL.ObjectType("SubjectsGroupBy", {
  isAbstract: true
})
export class SubjectsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subject_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subject_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subject_nickname!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  subject_educations!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  subject_created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  subject_updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subject_situation!: string;

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
