import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
