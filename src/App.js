import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
