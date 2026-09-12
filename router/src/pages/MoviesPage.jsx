import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard.jsx';
import GenreFilter from '../components/GenreFilter.jsx';
import { movies, genres } from '../data/movies.js';

export default function MoviesPage() {
  const [searchParams] = useSearchParams();
  const activeGenre = searchParams.get('genre') || '';

  const visibleMovies = activeGenre
    ? movies.filter(m => m.genre === activeGenre)
    : movies;

  return (
    <section className="page-shell">
      <span className="eyebrow">CATALOG</span>
      <h1 className="page-title">Все фильмы</h1>
      <p className="page-description">
        Выберите жанр. Выбранный фильтр должен храниться в адресной строке.
      </p>

      <GenreFilter genres={genres} activeGenre={activeGenre} />

      <div className="movie-grid">
        {visibleMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
