import React, { useEffect } from 'react';
import { Dispatch } from "redux";
import styled from 'styled-components';
import animeService from '../../services/animeService';
import { GetAnimePage } from '../../services/animeService/__generated__/GetAnimePage';
import { setAnimePage } from './slice';
import { useAppDispatch } from '../../hooks';
import { AnimeList } from './animeList';
 
interface IHomePageProps{}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage:(page: GetAnimePage["Page"]) => dispatch(setAnimePage(page))
})


export function HomePage(props: IHomePageProps) {

  const { setAnimePage } = actionDispatch(useAppDispatch());

  // use hooks and dispatch here then useeffct call fetchAnimePage method to get data
  
  const fetchAnimePage = async() => {
    const animePage = await animeService.getAnimePage(0, 100).catch((error) => {
      console.log(error);
    })
    console.log("Pages load: " + animePage);
    if (animePage) setAnimePage(animePage);
  }
  
  useEffect(() => {
    fetchAnimePage();
  },[])

  return (
    <Container>
      <h1>Hot Anime</h1>
      <AnimeList />
    </Container>
  );
}