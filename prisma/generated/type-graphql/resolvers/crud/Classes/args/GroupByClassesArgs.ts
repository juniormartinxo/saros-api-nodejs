import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassesOrderByWithAggregationInput } from "../../../inputs/ClassesOrderByWithAggregationInput";
import { ClassesScalarWhereWithAggregatesInput } from "../../../inputs/ClassesScalarWhereWithAggregatesInput";
import { ClassesWhereInput } from "../../../inputs/ClassesWhereInput";
import { ClassesScalarFieldEnum } from "../../../../enums/ClassesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByClassesArgs {
  @TypeGraphQL.Field(_type => ClassesWhereInput, {
    nullable: true
  })
  where?: ClassesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClassesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ClassesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClassesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"class_id" | "class_name" | "class_teachers_ids" | "class_education_id" | "class_created_at" | "class_updated_at" | "class_situation">;

  @TypeGraphQL.Field(_type => ClassesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ClassesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
