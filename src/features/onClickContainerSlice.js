import { createSlice } from '@reduxjs/toolkit';
export const onClickContainerSlice = createSlice({
  name: 'click',
  initialState: {
    IsCodingClicked: false,
    IsUIClicked: false,
    IsCodeColorOn: false,
    
  },
  reducers: {
    //blue Sphvere  
    codingClickedOn:(state) => {state.IsCodingClicked = true;} , codingClickedOff: (state) => {state.IsCodingClicked = false;},
    //red gmail 
    UiClickedOn:(state) => {state.IsUIClicked = true;}, UiClickedOff: (state) => {state.IsUIClicked = false;},
    //yellow linkedin
    codeClickedColorOn:(state) => {state.IsCodeColorOn  = true;}, codeClickedColorOff: (state) => {state.IsCodeColorOn = false;},

  },
});

export const { 
codingClickedOff , codingClickedOn, UiClickedOn, UiClickedOff,IsCodeColorOn, codeClickedColorOn} = onClickContainerSlice.actions;

//selector
export const codingSelector = (state) => state.click.IsCodingClicked; //gmail
export const UiSelector = (state) => state.click.IsUIClicked; //sphver
export const codecolorSelector = (state) => state.click.IsCodeColorOn; //sphver





export default onClickContainerSlice.reducer;
 