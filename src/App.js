
import './App.css';

import  React from "react";
import InicioPage from './pages/InicioPage';
import TecnologiaPage from './pages/TecnologiaPage';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {



  return (

        <div>
            <div className="section">
            <InicioPage/>
            </div>
            <div className="section">
              <TecnologiaPage/>
            </div>
        </div>
   
  );
}


export default App;
