import { createSlice } from '@reduxjs/toolkit';
export const colorSlice = createSlice({
  name: 'color',
  initialState: {
    IsBlueHoverOn: false,
    IsRedHoverOn: false,
    IsYellowHoverOn: false,
    IsGreenHoverOn: false,
    IsOrangeHoverOn: false,
    IsPinkHoverOn: false,
    IsBrownHoverOn: false,
    darkModeOn: false,
    codingProjectsOn: false
  },
  reducers: {
    //blue Sphvere  
    blueHoveredOn:(state) => {state.IsBlueHoverOn = true;}, blueHoveredOff: (state) => {state.IsBlueHoverOn = false;},
    //red gmail 
    redHoveredOn:(state) => {state.IsRedHoverOn = true;}, redHoveredOff: (state) => {state.IsRedHoverOn = false;},
    //yellow linkedin
    yellowHoveredOn: (state) => {state.IsYellowHoverOn = true;} , yellowHoveredOff: (state) => {state.IsYellowHoverOn = false;},
    //green healthsupps
    greenHoveredOn: (state) => {state.IsGreenHoverOn = true;}, greenHoveredOff: (state) => {state.IsGreenHoverOn = false;},
    //orange amazon
    orangeHoveredOn: (state) => {state.IsOrangeHoverOn = true;}, orangeHoveredOff: (state) => {state.IsOrangeHoverOn = false;},
    //pink airbnb
    pinkHoveredOn: (state) => {state.IsPinkHoverOn = true;}, pinkHoveredOff: (state) => {state.IsPinkHoverOn = false;},
    //brown airbnb
    brownHoveredOn: (state) => {state.IsBrownHoverOn = true;}, brownHoveredOff: (state) => {state.IsBrownHoverOn = false;},

    //darmode on
    darkModeOn: (state) => {state.darkModeOn = true;}, darkModeOff: (state) => {state.darkModeOn = false;},
  },
});

export const {  blueHoveredOn, blueHoveredOff, redHoveredOn , redHoveredOff,
   yellowHoveredOn, yellowHoveredOff, greenHoveredOn,greenHoveredOff,
   orangeHoveredOn,orangeHoveredOff ,darkModeOn, darkModeOff, pinkHoveredOn, pinkHoveredOff} = colorSlice.actions;

//selector
export const projectZeroIsHovered = (state) => state.color.IsBrownHoverOn; //amazon
export const projectTwoIsHovered = (state) => state.color.IsBlueHoverOn; //gmail
export const projectOneIsHovered = (state) => state.color.IsRedHoverOn; //sphvere
export const projectThreeIsHovered = (state) => state.color.IsYellowHoverOn; //linkedin
export const projectFourIsHovered = (state) => state.color.IsGreenHoverOn; //healthsupps
export const projectFiveIsHovered = (state) => state.color.IsOrangeHoverOn; //amazon
export const projectSixIsHovered = (state) => state.color.IsPinkHoverOn; //amazon

export const DarkModeIsOn = (state) => state.color.darkModeOn;


export default colorSlice.reducer;
