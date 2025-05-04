import HomePage from "./pages/Home";
import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";

const AppContent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const channelList =
    queryParams.get("channels")?.split(",").slice(0, 12) || [];

  return (
    <Routes>
      <Route path="/" element={<HomePage channelList={channelList} />} />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
