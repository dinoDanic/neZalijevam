import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider, ContentLayout } from "layout";
import { queryClient } from "lib/reactQuery";
import type { AppProps } from "next/app";
import { Normalize, ReactCalendarStyle } from "styles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools position={"top-right"} />
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
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
