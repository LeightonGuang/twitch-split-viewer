import HomePage from "./pages/Home";
import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";

const AppContent = () => {
  const location = useLocation();
  const queryParams: URLSearchParams = new URLSearchParams(location.search);

  const channelList: string[] =
    queryParams.get("channels")?.split(",").slice(0, 12) || [];
  const team1List: string[] = queryParams.get("team1")?.split(",") || [];
  const team2List: string[] = queryParams.get("team2")?.split(",") || [];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            channelList={channelList}
            team1List={team1List}
            team2List={team2List}
          />
        }
      />
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
