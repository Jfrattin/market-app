import React from "react";
import { Header } from "./Components/Header/Header";
import 'boxicons';
import { Paginas } from './Components/Paginas';
import { DataProvider } from "./Components/context/Dataprovider";
import { Carrier } from "./Components/Carrier/Carrier";

function App() {
  return (
    
    <div className="App">
      
     
      <DataProvider>
      <Header/>
      
      <Carrier/>
      <Paginas/>
      
      </DataProvider>
    </div>
  
 );
}

export default App;
