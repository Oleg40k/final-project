import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";

import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import { AllRouter } from "./routes";

export function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Департамент юридичного забезпечення МОУ</title>
      </Helmet>
      <Header />
      <AllRouter />
      <Footer />
    </div>
  );
}
