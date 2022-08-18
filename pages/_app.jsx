import { useEffect, useState } from "react";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import { Icon } from "@iconify/react";

function MyApp({ Component, pageProps }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <>
      {ready === false ? (
        <div className={styles.loading}>
          <Icon icon="eos-icons:bubble-loading" width="45" />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
