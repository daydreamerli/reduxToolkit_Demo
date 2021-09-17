import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./type";
import { GetAnimePage } from '../../services/animeService/__generated__/GetAnimePage';

const initialState : IHomePageState = {
  animePage: null,
}   

const HomePageSlice = createSlice(
  {
    name: "homePage",
    initialState,
    reducers: {
        // immutable state  implementation the copy the state and use dispatch to sign the state value
      setAnimePage(state, action) {
        state.animePage = action.payload;
      }
    }
  }
)
export const  { setAnimePage} = HomePageSlice.actions;

export default HomePageSlice.reducer;