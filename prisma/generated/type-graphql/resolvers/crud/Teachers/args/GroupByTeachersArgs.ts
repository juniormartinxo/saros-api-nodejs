import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeachersOrderByWithAggregationInput } from "../../../inputs/TeachersOrderByWithAggregationInput";
import { TeachersScalarWhereWithAggregatesInput } from "../../../inputs/TeachersScalarWhereWithAggregatesInput";
import { TeachersWhereInput } from "../../../inputs/TeachersWhereInput";
import { TeachersScalarFieldEnum } from "../../../../enums/TeachersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTeachersArgs {
  @TypeGraphQL.Field(_type => TeachersWhereInput, {
    nullable: true
  })
  where?: TeachersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TeachersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TeachersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeachersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"teacher_id" | "teacher_school_id" | "teacher_name" | "teacher_nickname" | "teacher_email" | "teacher_celphone" | "teacher_disciplines_ids" | "teacher_shifts_ids" | "teacher_restrictions" | "teacher_created_at" | "teacher_updated_at" | "teacher_situation">;

  @TypeGraphQL.Field(_type => TeachersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TeachersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
