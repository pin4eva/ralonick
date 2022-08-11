import type { AppProps } from "next/app";
import "../styles/index.scss";
import "../styles/custom.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
