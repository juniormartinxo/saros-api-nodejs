import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("UsersMinAggregate", {
  isAbstract: true
})
export class UsersMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_salt!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_password!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  user_created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  user_updated_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_situation!: string | null;
}
