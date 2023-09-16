import {createSlice} from "@reduxjs/toolkit";
import { epsilon, population } from "../../parametre";

const initialState = {
    newTest : {XA: 0, XB: 0, YA:0, YB:0}, 
    cumulatedTest : {XA: 0, XB: 0, YA:0, YB:0}, 
    newPositive : {XA: 0, XB: 0, YA:0, YB:0}, 
    cumulatedPositive : {XA: 0, XB: 0, YA:0, YB:0 }
}

const analyticsSlice = createSlice({
    name: "analytics",
    initialState: initialState,
    reducers : {
        setAnalytics(state, action) {
            // attends un payload = {newTest: {XA: 0, ...}, newPositive: {XA: 0 , ...}}
            state.newTest.XA = action.payload.newTest.XA * epsilon * population;
            state.newTest.XB = action.payload.newTest.XB * epsilon * population;
            state.newTest.YA = action.payload.newTest.YA * epsilon * population;
            state.newTest.YB = action.payload.newTest.YB * epsilon * population;

            action.payload.newTest.XA *=  epsilon * population;
            action.payload.newTest.XB *=  epsilon * population;
            action.payload.newTest.YA *=  epsilon * population;
            action.payload.newTest.YB *=  epsilon * population;

            state.newPositive = action.payload.newPositive;
            state.cumulatedPositive = sumDictionaries(state.cumulatedPositive, action.payload.newPositive);
            state.cumulatedTest = sumDictionaries(state.cumulatedTest, action.payload.newTest);
        },

    }
});

function sumDictionaries(a, b) {
    const sumResult = { ...a }; 
    for (const key in a) {
      if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
        sumResult[key] += b[key];
      }
    }  
    return sumResult;
}

export default analyticsSlice;
export const analyticsAction = analyticsSlice.actions;