import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/footer";
import {List} from "./components/list/List";

function App() {
  return (
    <div className="App">
        <Header />

        <div className="main">
      <Routes>
            <Route path="/list" element={<List />} />
            <Route path="/my" element={<List />} />
      </Routes>

        </div>
        <Footer />
    </div>
  );
}

export default App;
