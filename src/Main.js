import React from "react";
import { useQuery } from "@apollo/client";
import BEST_STORY from "./query";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import Link from "./components/Links";
import Footer from "./components/Footer";

const Main = () => {
  let params = useParams();

  const username = params.username;
  const theme = params.theme;
  const { loading, error, data } = useQuery(BEST_STORY, {
    variables: { username }
  });
  if (loading)
    return (
      <div className={`loader flex ${theme}`}>
        <div class="spinner"></div>
      </div>
    );
  if (error) return <p>Something went wrong</p>;
  if (data) {
    return (
      <div className={`main flex ${theme}`}>
        <Header name={data.user.name} profileImg={data.user.photo} />

        <div className="helper flex">
          {data.user.socialMedia.twitter && (
            <Link
              linkTitle="Twitter"
              linkIcon="bxl-twitter"
              link={data.user.socialMedia.twitter}
            />
          )}
          {data.user.socialMedia.github && (
            <Link
              linkTitle="Github"
              linkIcon="bxl-github"
              link={data.user.socialMedia.github}
            />
          )}
          {data.user.socialMedia.linkedin && (
            <Link
              linkTitle="Linkedin"
              linkIcon="bxl-linkedin"
              link={data.user.socialMedia.linkedin}
            />
          )}
          {data.user.socialMedia.facebook && (
            <Link
              linkTitle="facebook"
              linkIcon="bxl-facebook"
              link={data.user.socialMedia.facebook}
            />
          )}
          {data.user.socialMedia.stackoverflow && (
            <Link
              linkTitle="Stackoverflow"
              linkIcon="bxl-stackoverflow"
              link={data.user.socialMedia.stackoverflow}
            />
          )}
          {data.user.socialMedia.google && (
            <Link
              linkTitle="Google"
              linkIcon="bxl-google"
              link={data.user.socialMedia.google}
            />
          )}
          {data.user.socialMedia.website && (
            <Link
              linkTitle="Website"
              linkIcon="bx-world"
              link={data.user.socialMedia.website}
            />
          )}
          <Footer />
        </div>
      </div>
    );
  }
};

export default Main;
