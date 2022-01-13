import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchoolsOrderByWithRelationInput } from "../../../inputs/SchoolsOrderByWithRelationInput";
import { SchoolsWhereInput } from "../../../inputs/SchoolsWhereInput";
import { SchoolsWhereUniqueInput } from "../../../inputs/SchoolsWhereUniqueInput";
import { SchoolsScalarFieldEnum } from "../../../../enums/SchoolsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSchoolsArgs {
  @TypeGraphQL.Field(_type => SchoolsWhereInput, {
    nullable: true
  })
  where?: SchoolsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SchoolsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SchoolsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SchoolsWhereUniqueInput, {
    nullable: true
  })
  cursor?: SchoolsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SchoolsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"school_id" | "school_name" | "school_category" | "school_cnpj" | "school_address" | "school_number" | "school_neighborhood" | "school_city" | "school_state" | "school_cep" | "school_phone" | "school_email" | "school_created_at" | "school_updated_at" | "school_situation"> | undefined;
}
