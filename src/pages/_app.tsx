import { ContentLayout } from "layout";
import type { AppProps } from "next/app";
import { Normalize } from "styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <ContentLayout>
        <Component {...pageProps} />
      </ContentLayout>
    </>
  );
}

export default MyApp;
