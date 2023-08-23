import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navpar from "./components/Navpar";
import LogInPage from "./Pages/LogInPage";
import PageNotFound from "./Pages/PageNotFound";
import { Routes, Route, Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navpar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BothCampInfo" element={<About />} />
        <Route path="/LogIn" element={<LogInPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
