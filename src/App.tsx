import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
