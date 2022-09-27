import Home from "./Home";
import { Routes, Route, Link, Router } from "react-router-dom";
import AppPPage from "./apps-project-page";
import LppPage from "./Landing-page-projets-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="lpppage" element= {<LppPage/>}/>
        <Route path="apppage" element={<AppPPage />} />
        
      </Routes>
    </div> 
  );
}


export default App;

