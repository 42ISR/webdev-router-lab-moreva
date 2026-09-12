import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()

  function handleSearchKeyDown(e) {
      if (e.key === 'Enter' && e.target.value.trim()) {
      navigate('/search?q=' + encodeURIComponent(e.target.value.trim()))
      e.target.value = '';
  }
}

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink href="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </NavLink>

        <nav className="nav">
          <NavLink className={({isActive}) => `nav-item${ isActive ? " active" : ""}`} to="/">Главная</NavLink>
          <NavLink className={({isActive}) => `nav-item${ isActive ? " active" : ""}`} to="/movies">Фильмы</NavLink>
          <NavLink className={({isActive}) => `nav-item${ isActive ? " active" : ""}`} to="/about">О проекте</NavLink>
        </nav>

          <input
            onKeyDown = {handleSearchKeyDown}
            placeholder="Поиск фильмов"
          />
      </div>
    </header>
  )
}
