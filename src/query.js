import { gql } from "@apollo/client";

const BEST_STORY = gql`
  query($username: String!) {
    user(username: $username) {
      _id
      name
      tagline
      photo
      publicationDomain
      socialMedia {
        twitter
        github
        stackoverflow
        linkedin
        google
        website
        facebook
      }
    }
  }
`;

export default BEST_STORY;
