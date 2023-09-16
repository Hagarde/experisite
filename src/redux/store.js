import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./feature/gameSlice";
import analyticsSlice from "./feature/analyticsSlice";
import utilsSlice from "./feature/utilsSlice";


export default configureStore({
    reducer : { 
        game: gameSlice.reducer,
        analytics : analyticsSlice.reducer, 
        utils : utilsSlice.reducer,
    },
})


