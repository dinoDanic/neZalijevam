import { routes } from "data";
import { useMeQuery } from "generated/graphql";
import { LocalStorage } from "helpers";
import { graphQlClient } from "lib";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
import { AuthorizeSkeleton } from "./components";

interface Props {
  children: ReactNode;
}

const IGNORE_AUTH = [routes.login, routes.register];

export const AuthProvider: FC<Props> = ({ children }) => {
  const { asPath, push } = useRouter();
  const ignoreRoute = IGNORE_AUTH.includes(asPath);
  const token = LocalStorage.getItem("nezalijevam-token");

  const { data, refetch, isInitialLoading } = useMeQuery(
    graphQlClient,
    {},
    {
      retry: 1,
      enabled: false,
      onError: () => {
        push(routes.login);
      },
      select: (data) => data.me,
    }
  );

  useEffect(() => {
    console.log("ll");
    if (ignoreRoute) return;
    if (data?.email) return;

    refetch();
  }, [asPath, token]);

  if (ignoreRoute) {
    return <>{children}</>;
  }
  if (isInitialLoading) {
    return <AuthorizeSkeleton />;
  }
  if (data?.email) {
    return <>{children}</>;
  }
  return <>something went wrong</>;
};
