import {gql} from '@apollo/client'

export const queryUser = gql`
query ExampleQuery($login: String!, $size: Int, $privacy: RepositoryPrivacy) {
    user(login: $login) {
      avatarUrl(size: $size)
      name
      createdAt
      repositories(privacy: $privacy) {
        totalCount
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
      location
      twitterUsername
      company
    }
  }
  


`


export const queryRepos = gql`

query ExampleQuery($login: String!, $privacy: RepositoryPrivacy , $first: Int, $repositoriesFirst2: Int) {
    user(login: $login) {
      repositories(privacy: $privacy, first: $repositoriesFirst2) {
        nodes {
          name
          languages(first: $first) {
            nodes {
              name
            }
          }
          url
        }
      }
    }
  }`

