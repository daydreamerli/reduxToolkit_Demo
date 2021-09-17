
import React from "react";
import { createSelector } from "reselect";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimate } from "../selectors";

const AnimeListContainer = styled.div`
max-width: 1280px;
width: 100%;
height: 100%;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`
const AnimeItemContainer = styled.div`
  width:12em;
  height:16em;
  display:flex;
  flex-direction:column;
`

const AnimeCover = styled.div`
  width:auto;
  height:10em;
  img{
    width:auto;
    height:100%
  }
`

const AnimeTtitle = styled.div`
  font-size:18px;
  margin-top:18x;
  color:#000;

`

const stateSelector = createSelector(makeSelectAnimate, (animePage) => ({
  animePage,
}));


export function AnimeList() {
  
  const { animePage } = useAppSelector(stateSelector);
  const isEmptyAnimePage = !animePage || !animePage.media || animePage.media.length === 0;

  if(isEmptyAnimePage)
  return <div> Loading......</div>;

  return (
    <AnimeListContainer>
      {animePage
        && animePage.media
        && animePage.media.map((anime) => (
        <AnimeItemContainer>
          <AnimeCover>
            <img src={anime?.coverImage?.extraLarge || ""} />
          </AnimeCover>
          <AnimeTtitle>{anime?.title?.english}</AnimeTtitle>
         
        </AnimeItemContainer>
    ))}
    
    </AnimeListContainer>
  );

}