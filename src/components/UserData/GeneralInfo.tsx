import styled from "styled-components";

interface GeneralInfoProps {
  username: string;
  bio: string;
  name: string;
  joinedAt: string;
  pfp: string;
}
/**
 * 
 * @param username (string) github username
 * @param name (string) fullname of github user
 * @param joinedAt (string) join Date to github DD MM YYYY
 * @param bio (string) short user bio
 * @param pfp (string) avatar image url  
 * @returns GeneralInfo component View
 */
export const GeneralInfo = ({
  username,
  name,
  joinedAt,
  bio,
  pfp,
}: GeneralInfoProps) => {
  return (
    <>
      <Info>
        <Pfp src={pfp} alt={name} />
        <SideInfo>
          <Name>{name}</Name>
          <Username>
            <a href={`https://github.com/${username}`}>@{username}</a>
          </Username>

          <JoinedAt>{joinedAt}</JoinedAt>
        </SideInfo>
      </Info>
      <Bio>{bio}</Bio>
    </>
  );
};

const Info = styled.div`
width: 100%;
  display: flex;
  align-items: center;
`;

const Bio = styled.p`
  color: ${(props) => props.theme.colors.textNorm};
  position:relative;
  font-size: 1.4rem;
  line-height: 192%;
  margin: 3.3rem 0 2.3rem;
  @media (min-width: 768px) {
    margin: 2.8rem 0 3.3rem;
    font-size: 1.6rem;
  }
`;

const Pfp = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin-right: 2rem;
  @media (min-width: 768px) {
    width: 117px;
    height: 117px;
    margin-right: 4.1rem;
  }
  @media (min-width: 900px) {
    display: none;
  }
`;

const SideInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    span:last-of-type {
      grid-column: 2/3;
      grid-row: 1 /2;
      justify-self: end;
    }
  }
`;

const Name = styled.strong`
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.textBolded};
  @media (min-width: 768px) {
    font-size: 2.7rem;
  }
`;

const Username = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  color: #0079ff;
  margin-bottom: 0.6rem;
  @media (min-width: 768px) {
    font-size: 1.6rem;
    margin-top: 0.5rem;
  }
`;

const JoinedAt = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.textNorm};
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;