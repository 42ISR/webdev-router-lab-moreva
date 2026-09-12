import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import MoviesPage from './pages/MoviesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/Movies" element={<MoviesPage />} />
        <Route path="/About" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}