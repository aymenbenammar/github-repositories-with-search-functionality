import styled from "styled-components"
import { ThemeContextProvider } from "./contexts/ThemeContext"
import {TopArea} from "./components/TopArea";
import { useState } from "react";
import { UserProps } from "./types/user";
import { Index } from "./components/UserData/Index";
import  {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client'
import { onError} from '@apollo/client/link/error'
 
// const errorLink= onError({graphqlErrors, networkError})=>{

// }
// const link =from({
//   errorLink, 
//   new HttpLink({uri:""})
// })
const client = new ApolloClient ({
  cache: new InMemoryCache(),
  uri :'https://api.github.com/graphql',
})

function App() {
  const [user, setUser] = useState<UserProps | null>(null)

  function setUserData (user: UserProps | null): void {
    setUser(user)
  }

  return (
    <ApolloProvider client={client}>
    <ThemeContextProvider>
      
        <Container>
          <TopArea setUser={setUserData} />
          {user && <Index user={user} />}
        </Container>
      
    </ThemeContextProvider>
    </ApolloProvider>
  );
}
const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  padding: 3.1rem 2.4rem;
  @media (min-width: 768px) {
    padding: 3.1rem 7rem;
  }
`;

export default App
