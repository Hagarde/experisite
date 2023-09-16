import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    experience : {}, 
    epidemie : {},
    newPositif : {}
}

const utilsSlice = createSlice({
    name: "utils",
    initialState: initialState,
    reducers : {
        setExperience(state, action) {
            state.experience = action.payload;
        },
        setEpidemie(state, action) {
            state.epidemie = action.payload;
        }, 
        setNewPositif(state, action) {
            state.newPositif = action.payload
        }
    }
});


export default utilsSlice;
export const utilsAction = utilsSlice.actions;