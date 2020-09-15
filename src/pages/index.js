import React from "react";

import Layout from "../components/layout";
import Index from "../components/indexAbout";
import HomeProject from "../components/homeProject";

const IndexPage = () => {
  return (
    <Layout>
        <Index />
        <HomeProject />
        <div className="container"> <h1>Hello</h1></div>      
    </Layout>
  );
};
export default IndexPage;
