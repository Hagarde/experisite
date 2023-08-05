import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./feature/gameSlice";
import analyticsSlice from "./feature/analyticsSlice";


export default configureStore({
    reducer : { 
        game: gameSlice.reducer,
        analytics : analyticsSlice.reducer
    },
})


