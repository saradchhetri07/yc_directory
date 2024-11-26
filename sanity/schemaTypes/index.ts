import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { startUp } from "./startup";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startUp],
};
