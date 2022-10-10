import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import NotFound from "./pages/NotFound/NotFound"

function RoutesApp() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
