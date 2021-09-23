import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header, { HeaderMobile } from "../components/Header";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ChakraProvider>
        <Header />
        <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          className="body"
        >
          <Component {...pageProps} />
        </div>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
