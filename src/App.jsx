
import React from "react";

import Header from './components/header/Header';
import Home from './page/home/Home';
import ServicesPro from "./context/Services";
import SssPro from "./context/Sss";
import './App.css';
import DietPro from "./context/Diets";



function App() {
  return (
      <div className="App">
        <SssPro>
          <DietPro>
             <ServicesPro>
                <Header />
                <Home/>
             </ServicesPro>
          </DietPro>
        </SssPro>
      </div>

  );
}

export default App;
