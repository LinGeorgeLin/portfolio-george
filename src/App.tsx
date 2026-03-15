import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Works from "./pages/works";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </>
  );
}
