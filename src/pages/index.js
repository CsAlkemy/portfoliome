import React from "react";

import Layout from "../components/layout";
import Index from "../components/indexAbout";
import HomeProject from "../components/homeProject";
import HomeBlog from "../components/homeBlog";

const IndexPage = () => {
  return (
    <Layout>
        <Index />
        <HomeProject />
        <HomeBlog />   
    </Layout>
  );
};
export default IndexPage;
