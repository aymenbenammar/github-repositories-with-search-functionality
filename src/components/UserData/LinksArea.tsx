import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";

interface LinksAreaPropos {
  links: {
    twitter: string;
    company: string;
  };
}
/**
 * 
 * @param links object 
 * @returns LinksArea  Component view
 */
export default function LinksArea({ links }: LinksAreaPropos) {
  const { lightMode } = useContext(ThemeContext);

  return (
    <Container>
      
      
      <Link className={`${!links.twitter && "unavailable"}`}>
        {links.twitter ? (
          <a href={`https://twitter.com/${links.twitter}`}>
            <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z"
                fill={lightMode ? "#4b6a9b" : "#fff"}
              />
            </svg>
            <Data>{links.twitter}</Data>
          </a>
        ) : (
          <>
            <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z"
                fill={lightMode ? "#4b6a9b" : "#fff"}
              />
            </svg>
            <Data>Not available</Data>
          </>
        )}
      </Link>
      <Link className={`${!links.company && "unavailable"}`}>
        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
          <g fill={lightMode ? "#4b6a9b" : "#fff"}>
            <path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z" />
          </g>
        </svg>
        <Data>{links.company || "Not Available"}</Data>
      </Link>
    </Container>
  );
}

const Container = styled.ul`
width : 100%; 
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2.4rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Link = styled.li`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  a {
    display: grid;
    grid-template-columns: 20px 1fr;
  }
  svg {
    width: 20px;
  }
  &.unavailable {
    opacity: 0.5;
  }
`;

const Data = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.textNorm};
  word-break: break-all;
  margin-left: 2rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;