import Home from "./Home";
import { Routes, Route} from "react-router-dom";
import AppPPage from "./apps-project-page";
import LppPage from "./Landing-page-projets-page";
import About from "./AboutPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/lpppage" element= {<LppPage/>}/>
        <Route path="/apppage" element={<AppPPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div> 
  );
}


export default App;

