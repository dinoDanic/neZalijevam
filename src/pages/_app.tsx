import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider, ContentLayout } from "layout";
import { queryClient } from "lib/reactQuery";
import type { AppProps } from "next/app";
import { Normalize, ReactCalendarStyle } from "styles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools position={"top-right"} />
        <Normalize />
        <ReactCalendarStyle  />
        <AuthProvider>
          <ContentLayout>
            <Component {...pageProps} />
          </ContentLayout>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
