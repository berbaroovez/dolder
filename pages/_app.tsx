import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../tools/useAuth";
import Layout from "../components/Layout";
import NavBar from "../components/Shared/NavBar";
import { Provider } from "react-redux";
import store from "../tools/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        {/* <Layout> */}
        <NavBar />
        <Component {...pageProps} />
        {/* </Layout> */}
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
