import styled from "styled-components";
import { Link } from "react-router-dom";

export const textColor = '#006989';
export const bgColor = "#eaebed";
export const subColor = "#a3bac3";

// interface MainInterface {
//     h: number;
// }

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  color: ${textColor};
`;

export const Header = styled.h1`
  margin: 2vh 5vw;
`;

export const Palette = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 2vh 4vw;
`

export const Tile = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 22vh;
  width: 18vw;
  border-radius: 5%;
  box-shadow: #bebebe 5px 7px 4px 0px;
  margin: 2vh 1vw;
  background: ${bgColor};
  color: ${textColor};
  text-decoration: none;
  transition: 0.2s;
  &:hover  {
    height: 23vh;
    width: 19vw;
    margin: 1.5vh 0.5vw;
    box-shadow: #f2f2f2 5px 7px 15px 0px;
  }
`;

export const TileHead = styled.h2`
background: linear-gradient(90deg, rgba(163,186,195,1) 40%, ${bgColor} 100%);
padding: 0 0 0 5%;
`;

export const TileDesc = styled.article`
  margin: 1% 5%;
`;
