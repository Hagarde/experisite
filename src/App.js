import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Game from './page/Game';
import Dashboard from './page/Dashboard.js';
import Acceuil from './page/Acceuil.js';
import Test from './page/Test.js';
import Questionnaire from './page/Questionnaire.js';
import GraphPage from './page/GraphPage';

function App() {
  return (
    <div className="App">
      <head> 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link href="./page/custom.css" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </head>
        <BrowserRouter>
          <Routes>
            <Route path="/game" element={<Game/>}></Route>
            <Route path="/" element={<Acceuil/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path='/jeu' element={<Game/>}></Route>
            <Route path='/questionnaire' element={<Questionnaire/>}></Route>
            <Route path="/graph/:experienceId" element={<GraphPage/>}></Route>
          </Routes>
        </BrowserRouter>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </div>
  );
};

export default App;