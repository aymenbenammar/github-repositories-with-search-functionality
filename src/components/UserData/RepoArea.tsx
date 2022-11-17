import styled from "styled-components";

interface RepoAreaProps {
  name: string;
  language: string;
  url: string;
}

export const RepoArea = ({ name, language,url }: RepoAreaProps) => {
  return (
    <Container>
      <Data>
        <a href={url} target="_blank">
        <strong>{name}</strong>
      
        </a>
        <span>{language}</span>
      </Data>


    </Container>
  );
};

const Container = styled.div`
width: 100%; 
margin-top: 1rem;
  border-radius: 1rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.background};
  padding: 1.8rem 1.4rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 1.8rem 3.2rem;
  }
`;

const Data = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
  span {
    font-size: 1.3rem;
    line-height: 1.6rem;
    text-align: center;
    margin-top: 0.8rem;
    color: ${(props) => props.theme.colors.textNorm};
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  strong {
    font-weight: bold;
    font-size: 1.8em;
    line-height: 2.4rem;
   
 
    color: ${(props) => props.theme.colors.textBolded};
    @media (min-width: 768px) {
      margin-top: 1rem;
      font-size: 2.4rem;
    }
  }
`;