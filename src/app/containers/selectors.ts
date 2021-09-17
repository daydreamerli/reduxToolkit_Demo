import { createSelector } from "reselect";
import { RootState } from "../store";
import { IRootState } from "../types/types";

const selectHome = (state: IRootState) => state.homePage;

export const makeSelectAnimate = createSelector(
  selectHome,
  (homePage) => homePage.animePage
)