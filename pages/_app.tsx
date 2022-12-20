import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../tools/useAuth";
import Layout from "../components/Layout";
import NavBar from "../components/Shared/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      {/* <Layout> */}
      <NavBar />
      <Component {...pageProps} />
      {/* </Layout> */}
    </AuthProvider>
  );
}

export default MyApp;
