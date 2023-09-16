import {createSlice} from "@reduxjs/toolkit";

const population = 100000 ;
const I0 = 50; 

const gameSlice = createSlice({
    name: "game",
    initialState: {
        population : population, 
        I0: I0, 
        epidemie : {R : 0, DD: 0, id: 0 },
        experience : {id : 0, t: 0, migration:0, initialisation : 0 },
        frame : {  id: 0, t:0, experience: 0,
            S1: population - I0, U1: I0, P1: 0, RU1:0, RP1:0 ,
            S2: population - I0, U2: I0, P2: 0, RU2:0, RP2:0 ,
            S3: population - I0, U3: I0, P3: 0, RU3:0, RP3:0 ,
            S4: population - I0, U4: I0, P4: 0, RU4:0, RP4:0 ,
            XA: 0, XB: 0 , YA:0, YB:0
        }
    },
    reducers : {
        updateTests(state,action) {
            const [testXY, testX, testY] = action.payload;
            state.frame.YB =(testXY*testY);
            state.frame.YA =(testXY*(1-testY));
            state.frame.XB =((1-testXY)*testX);
            state.frame.XA =((1-testXY)*(1-testX)); // On peut comprendre dans les deux sens le fait de déplacer un curseur d'un côté pour mieux lot
        },
        test(state, action){
            state.I0 +=1;
        }, 
        setEpidemie(state, action) {
            const epidemie_ = typeof action.payload == Array ? action.payload[0] : action.payload;
            state.epidemie  = epidemie_;
        }, 
        setExperience(state, action) {
            const experience_ =  typeof action.payload == Array ? action.payload[0] : action.payload;
            state.experience = experience_;
        },
        setFrame(state, action) {
            const frame_ =  typeof action.payload == Array ? action.payload[0] : action.payload;
            state.frame = frame_;
        }
    }
});

export default gameSlice;
export const gameAction = gameSlice.actions;