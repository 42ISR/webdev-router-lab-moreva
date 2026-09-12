import { useSearchParams } from "react-router-dom";

export default function GenreFilter({ genres }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeGenre = searchParams.get("genre") || "";

  const onSelectGenre = (genreId) => {
    setSearchParams(genreId ? { genre: genreId } : {});
  };

  return (
    <div className="filter-row">
      {genres.map(genre => (
        <button
          key={genre.id || 'all'}
          type="button"
          className={'filter-chip' + (genre.id === activeGenre ? ' active' : '')}
          onClick={() => onSelectGenre(genre.id)}
        >
          {genre.label}
        </button>
      ))}
    </div>
  );
}