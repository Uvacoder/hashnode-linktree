import { gql } from "@apollo/client";

const USER = gql`
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

export default USER;
