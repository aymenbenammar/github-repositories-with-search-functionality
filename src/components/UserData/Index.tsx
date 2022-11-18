import styled from "styled-components";
import { GeneralInfo } from "./GeneralInfo";
import LinksArea from "./LinksArea";
import { StatsArea } from "./StatsArea";
import { UserDataProps } from "../../types/user";
import { useState } from "react";
import { RepoArea } from "./RepoArea";
import {useQuery} from "@apollo/client"
import { queryRepos} from "../../graphql/queries"
import { AUTHORIZATION_TOKEN,REPOSTORIES_PRIVACY, REPOSTORIES_FIRST, LANGUAGE_FIRST } from "../../utils/global.env";


/**
 * This component renders the User Data (profile and repositories)
 * @param user (object) user's data
 * @returns Index Component view
 */
export const Index = ({ user  }: UserDataProps) => {
  const [filter,setFilter]=useState('');
  /**
   * Query to fetch repositories
   */
  const {loading , error , data} = useQuery(queryRepos,
   
    {variables: {
      "first": LANGUAGE_FIRST,
      "privacy": REPOSTORIES_PRIVACY,
      "login": user.username,
      "repositoriesFirst2": REPOSTORIES_FIRST
 },
   context:
    { headers: { authorization: AUTHORIZATION_TOKEN } 
   }

},


  
   )

if (loading) return 'Loading...';
  return (
    <Container>
     

      <LeftSideArea>
        <Bio> <Pfp src={user.pfp} alt={user.name} />
        <GeneralInfo
          username={user.username}
          bio={user.bio}
          name={user.name}
          joinedAt={user.joinedAt}
          pfp={user.pfp}
        /></Bio>
     

        <StatsArea
          repos={user.repos}
          followers={user.followers}
          following={user.following}
        />

        <LinksArea links={user.links}/>
      </LeftSideArea>
      <RightSideArea>
      <InputArea>
        <InputLabel>
          <img src="/assets/icon-search.svg"  alt="search .."/>
        </InputLabel>

        <Input
          name="filter"
          id="filter"
          type="text"
          placeholder="Search repository ..."
          onChange={(e) => {
            setFilter(e.target.value)
          }}></Input>
      </InputArea>
      <ReposList>
      {
        data.user.repositories.nodes.filter((item: any)=>{
          return filter.toLowerCase()===''? item : item.name.toLowerCase().includes(filter.toLowerCase())
        })
        .map((item :any)=>(
          <RepoArea
          name={item.name}
          language={item.languages.nodes.name}
          url={item.url}
          />
        ))
      }
      </ReposList>
      </RightSideArea>
    
    </Container>
    
  );
};

const Container = styled.section`

  width: 100%;
  padding: 3rem 2.4rem;
  background: ${(props) => props.theme.colors.card};
  border-radius: 1.5rem;
  margin-top: 1.6rem;

  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  display: block;
  @media (min-width: 768px) {
    padding: 5.2rem 4.8rem;
  
  }
  @media (min-width: 900px) {
    padding: 4.8rem;

  }
  a {
    all: unset;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Pfp = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  margin-right: 3.7rem;
  display: none;
  @media (min-width: 900px) {
    display: block;
  }
`;

const LeftSideArea = styled.div`
@media(min-width: 1200px){
  width: 40%;
  float:left;
}
`;
const ReposList = styled.div`
overflow-y: auto; 
max-height: 40rem;
`;
const RightSideArea =styled.div`

@media(min-width: 1200px){
  width: 55%;
  float:right;
}
`;
const Bio = styled.div`
display: flex;
`;
const InputArea = styled.form`
  margin-top: 3.6rem;
  border-radius: 1.5rem;
  background: ${(props) => props.theme.colors.card};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.7rem 0.7rem 1.6rem;
  transition: height 0.3s ease;
  position: relative;
  @media (min-width: 768px) {
    height: 6.9rem;
  }
`;

const InputLabel = styled.label`
  height: 2.4rem;
  cursor: pointer;
`;

const Input = styled.input`
  flex: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 192%;
  color: ${(props) => props.theme.colors.textNorm};
  background: none;
  border: none;
  margin: 0 0.8rem;
  @media (min-width: 768px) {
    font-size: 1.7rem;
    margin: 0 2.4rem;
  }
  &:focus {
    outline: 1px dashed #0079ff;
  }
`;