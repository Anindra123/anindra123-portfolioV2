import * as React from "react";
import HomepageBody from "../components/HomepageBody";

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <HomepageBody />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;
export default IndexPage;
