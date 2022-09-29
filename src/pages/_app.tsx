import type { AppProps } from "next/app";
import "../styles/index.scss";
import "../styles/custom.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Fragment, useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
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
