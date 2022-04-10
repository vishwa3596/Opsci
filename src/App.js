import './App.css';
import HomePage from "./component/Homepage";
import {Routes, Route} from "react-router-dom"
import Login from "./component/Login"
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" exact="true" element={<HomePage/>}/>
            <Route path="/login" exact element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
