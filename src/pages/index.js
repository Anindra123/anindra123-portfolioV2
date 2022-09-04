import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <h3>This will be the homepage</h3>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;
export default IndexPage;
