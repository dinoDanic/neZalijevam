import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider, ContentLayout } from "layout";
import { queryClient } from "lib/reactQuery";
import type { AppProps } from "next/app";
import { Normalize, ReactCalendarStyle } from "styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Normalize />
        <ReactCalendarStyle />
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
