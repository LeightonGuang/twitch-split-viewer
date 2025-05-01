import HomePage from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  const paths = window.location.pathname
    .split("/")
    .filter((path) => path !== "");
  console.log(paths);

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage streamerList={paths} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
