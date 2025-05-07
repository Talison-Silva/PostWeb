import { styled } from "styled-components";

//import Header from "@/components/layout/header";
//import Credits from "@/components/layout/credits";
import Aside from "@/components/layout/aside";
import Feeds from "@/components/layout/feeds";
import Highlights from "@/components/layout/highlights";
import { AuthContext } from "@/app/contexts/AuthContext.tsx";
import { FourSquare } from "react-loading-indicators";
import { useContext, useEffect, useRef, useState } from "react";

const Layout = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-color: #121212;

  display: flex;

  & .main {
    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  .container {
    flex-grow: 1;
    height: 100vh;
    overflow-x: hiden;
    overflow-y: auto;
  }
`;

export default ({ children, require }) => {
  /*
  const { isClient, refreshjwt, tokenjwt } = useContext(AuthContext);
  routes.jsx todos os que tiverem require não acessaram sem token - inplmente no futuro
  if (!isClient && tokenjwt()) {
    refreshjwt();
  }
  */

  /*
  const open = () => {
    var credits = document.getElementById("credits");
    credits.style.left = "0%";
  };
  const close = () => {
    var credits = document.getElementById("credits");
    credits.style.left = "100%";
  };

  return (
    <Layout>
      <Credits close={close} id="credits" />
      <Header open={open} />
      <div className="z-10 main">{children}</div>
    </Layout>
  );
  */
  const { isClient, refreshjwt, tokenjwt } = useContext(AuthContext);

  if (!isClient && tokenjwt() === undefined) {
    refreshjwt();
  }

  if (isClient) {
    return (
      <Layout>
        <Aside />
        <main className="container">{children}</main>
      </Layout>
    );
  } else {
    return (
      <section className="w-full h-screen flex justify-center items-center">
        <FourSquare color="#084ccf" size="medium" text="" textColor="" />
      </section>
    );
  }
};
