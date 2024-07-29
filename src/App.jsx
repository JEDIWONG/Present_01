import {BrowserRouter, Routes,Route} from "react-router-dom";
import AuthSurprise from "./AuthSurprise";
import Layout from "./Layout";
import NoPage from "./NoPage";
import Surprise from "./Surprise";
import Hope from "./Hope";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<AuthSurprise/>}/>
            <Route path="Surprise" element={<Surprise/>}></Route>
            <Route path="Hope" element={<Hope/>}></Route>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
};

export default App;
