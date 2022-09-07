import type { AppProps } from "next/app";
import "../styles/index.scss";
import "../styles/custom.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Head>
				<title>Ralonick</title>
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
