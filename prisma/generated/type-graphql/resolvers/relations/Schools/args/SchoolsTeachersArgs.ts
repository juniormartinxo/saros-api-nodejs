import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeachersOrderByWithRelationInput } from "../../../inputs/TeachersOrderByWithRelationInput";
import { TeachersWhereInput } from "../../../inputs/TeachersWhereInput";
import { TeachersWhereUniqueInput } from "../../../inputs/TeachersWhereUniqueInput";
import { TeachersScalarFieldEnum } from "../../../../enums/TeachersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class SchoolsTeachersArgs {
  @TypeGraphQL.Field(_type => TeachersWhereInput, {
    nullable: true
  })
  where?: TeachersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TeachersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TeachersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TeachersWhereUniqueInput, {
    nullable: true
  })
  cursor?: TeachersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TeachersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"teacher_id" | "teacher_school_id" | "teacher_name" | "teacher_nickname" | "teacher_email" | "teacher_celphone" | "teacher_disciplines_ids" | "teacher_shifts_ids" | "teacher_restrictions" | "teacher_created_at" | "teacher_updated_at" | "teacher_situation"> | undefined;
}
