import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me($userId: ID!) {
    me(userId: $userId) {
      _id
      bookCount
      email
      username
      savedBooks {
        bookId
        description
        image
        link
        title
        authors
      }
    }
  }
`;
