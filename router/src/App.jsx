import { Routes } from "react-router-dom"
import { Route } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import Layout from "./pages/Layout.jsx";
import SearchPage from './pages/SearchPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import MoviesPage from './pages/MoviesPage.jsx';
import MoviePage from './pages/MoviePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MoviePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
