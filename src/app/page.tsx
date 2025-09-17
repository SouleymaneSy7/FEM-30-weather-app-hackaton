import * as React from "react";

import Header from "@/components/layouts/Header";
import Navbar from "@/components/layouts/Navbar";
import Main from "@/components/layouts/Main";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Main />
    </React.Fragment>
  );
}
