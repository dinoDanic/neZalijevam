import { GraphQLClient } from "graphql-request";
import { LocalStorage } from "helpers";

export const graphQlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRPAHQL_API as string,
  {
    headers: () => ({
      Authorization: LocalStorage.getItem("nezalijevam-token") || "",
    }),
  }
);
