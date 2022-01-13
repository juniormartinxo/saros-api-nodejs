import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCountAggregate } from "../outputs/UsersCountAggregate";
import { UsersMaxAggregate } from "../outputs/UsersMaxAggregate";
import { UsersMinAggregate } from "../outputs/UsersMinAggregate";

@TypeGraphQL.ObjectType("UsersGroupBy", {
  isAbstract: true
})
export class UsersGroupBy {
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

  @TypeGraphQL.Field(_type => UsersCountAggregate, {
    nullable: true
  })
  _count!: UsersCountAggregate | null;

  @TypeGraphQL.Field(_type => UsersMinAggregate, {
    nullable: true
  })
  _min!: UsersMinAggregate | null;

  @TypeGraphQL.Field(_type => UsersMaxAggregate, {
    nullable: true
  })
  _max!: UsersMaxAggregate | null;
}
