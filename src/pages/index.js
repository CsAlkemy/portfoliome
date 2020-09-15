import React from "react";

import Layout from "../components/layout";
import Index from "../components/indexAbout";

const IndexPage = () => {
  return (
    <Layout>
        <Index />
        <div className="container"> <h1>Hello</h1></div>      
    </Layout>
  );
};
export default IndexPage;
