import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Works from './pages/works';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
    </Routes>
  );
}