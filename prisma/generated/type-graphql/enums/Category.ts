import * as TypeGraphQL from "type-graphql";

export enum Category {
  estadual = "estadual",
  federal = "federal",
  municipal = "municipal",
  militar = "militar",
  particular = "particular"
}
TypeGraphQL.registerEnumType(Category, {
  name: "Category",
  description: undefined,
});
