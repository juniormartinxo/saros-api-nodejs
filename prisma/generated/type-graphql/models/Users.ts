import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Users", {
  isAbstract: true
})
export class Users {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

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
    nullable: false
  })
  user_created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  user_updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_situation!: string;
}
