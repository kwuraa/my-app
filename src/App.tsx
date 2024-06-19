import React from "react";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      Hello World!!
      <Card
        id={1}
        paragraph="Typescript"
        details="TS para front-end e Back-end"
      />
      <Card id={2} paragraph="Html" details="HTML para Front-end" />
      <Card id={3} paragraph="Java" details="Java para Back-end" />
    </Layout>
  );
}

export default App;
