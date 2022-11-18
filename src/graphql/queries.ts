import {gql} from '@apollo/client'

/**
 * GraphQl Query to fetch user 
 * @param login username of the user
 * @param size of the avatar image url
 * @param privacy of repositories to return ( PUBLIC | PRIVATE)
 */
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
/**
 * GraphQl Query to return repositories of a user
 * @param login username of the user 
 * @param privacy of the repositories (PUBCLIC | PRIVATE)
 * @param first number of languages to return
 * @param repositoriesFirst2 maximum number of repositories to return 
 */

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

