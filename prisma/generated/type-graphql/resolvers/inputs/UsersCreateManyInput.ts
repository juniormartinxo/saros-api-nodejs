import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("UsersCreateManyInput", {
  isAbstract: true
})
export class UsersCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_salt!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_password!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  user_created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  user_updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_situation?: string | undefined;
}
