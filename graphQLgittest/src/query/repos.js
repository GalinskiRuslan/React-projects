import { gql } from "@apollo/client";

export const SEARCH_REPOSITORY = gql`
  query searchRep($query: String!, $after: String) {
    search(query: $query, type: REPOSITORY, first: 10, after: $after) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            owner {
              avatarUrl
              login
            }

            descriptionHTML
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
            updatedAt
          }
        }
      }
    }
  }
`;
