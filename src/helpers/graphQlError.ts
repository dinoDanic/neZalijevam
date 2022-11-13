import { GraphQLError } from "graphql";

export const graphQlError = (error: GraphQLError | null): string => {
  if (!error) return "something went wrong";

  const json = JSON.parse(JSON.stringify(error, undefined, 2));

  const message: string = json.response?.errors[0]?.message;

  if (!message) return "something went wrong";

  return message
};
