import React from "react";
import { useQuery } from "@apollo/client";
import BEST_STORY from "./query";
import { graphql } from "@octokit/graphql";

const App = () => {
  const username = "sandeep";
  const { loading, error, data } = useQuery(BEST_STORY, {
    variables: { username },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  if (data) {
    console.log(data);
    return (
      <div>
        <h1>Hashnode</h1>
      </div>
    );
  }
};

export default App;
