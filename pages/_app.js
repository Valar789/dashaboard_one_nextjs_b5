import { useEffect } from "react";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import SideNav from "components/Layout/SideNav";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("../public/js/scripts.js");
    require('bootstrap/dist/js/bootstrap.min.js')
  }, []);

  return (

      <SideNav>
        <Component {...pageProps} />
      </SideNav>

  );
}

export default MyApp;
