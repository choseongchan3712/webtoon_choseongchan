import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Sub from "./pages/Sub";
import PageNoteFound from "./pages/PageNotFound";

function App() {
  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webtoon/:id" element={<Sub />} />
        <Route path="/*" element={<PageNoteFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
