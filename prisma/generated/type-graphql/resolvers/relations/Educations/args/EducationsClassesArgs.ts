import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClassesOrderByWithRelationInput } from "../../../inputs/ClassesOrderByWithRelationInput";
import { ClassesWhereInput } from "../../../inputs/ClassesWhereInput";
import { ClassesWhereUniqueInput } from "../../../inputs/ClassesWhereUniqueInput";
import { ClassesScalarFieldEnum } from "../../../../enums/ClassesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class EducationsClassesArgs {
  @TypeGraphQL.Field(_type => ClassesWhereInput, {
    nullable: true
  })
  where?: ClassesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClassesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ClassesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ClassesWhereUniqueInput, {
    nullable: true
  })
  cursor?: ClassesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ClassesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"class_id" | "class_name" | "class_teachers_ids" | "class_education_id" | "class_created_at" | "class_updated_at" | "class_situation"> | undefined;
}
