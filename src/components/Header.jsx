import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderMenu } from './styledHeader';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref para o menu

  useEffect(() => {
    setMenuOpen(false); // Fecha o menu ao trocar de página
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Fecha o menu ao clicar fora
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <HeaderMenu>
      <header className="header">
        <nav className="nav-container">
          <div className="nav__data">
            <Link to="/" className="nav__logo">
              <img src="/img/logo2.png" alt="Logo" />
            </Link>

            <div className="nav__toggle" onClick={toggleMenu} id="nav-toggle">
              {menuOpen ? (
                <i className="ri-close-line nav__close"></i>
              ) : (
                <i className="ri-menu-line nav__burger"></i>
              )}
            </div>
          </div>

          <div ref={menuRef} className={`nav__menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list">
              <li><Link to="/" className="nav__link" onClick={() => setMenuOpen(false)}>Home</Link></li>

              <li><Link to="/loja" className="nav__link" onClick={() => setMenuOpen(false)}>Loja</Link></li>
              <li><Link to="/minigames" className="nav__link" onClick={() => setMenuOpen(false)}>Jogos</Link></li>


              <li className="dropdown__item">
                <div className="nav__link">
                  Categorias <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>
                <ul className="dropdown__menu">
                  <li><Link to="/rally-sertoes/mais-informacoes" className="dropdown__link" onClick={() => setMenuOpen(false)}>Rally dos Sertões</Link></li>

                  <li><Link to="/formula-e/mais-informacoes" className="dropdown__link" onClick={() => setMenuOpen(false)}>Fórmula E</Link></li>

                  <li><Link to="/categorias" className="dropdown__link" onClick={() => setMenuOpen(false)}>Mais categorias</Link></li>

                </ul>
              </li>

              <li className="dropdown__item">
                <div className="nav__link">
                  Usuário <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>
                <ul className="dropdown__menu">
                  <li><Link to="/login" className="dropdown__link" onClick={() => setMenuOpen(false)}>Login</Link></li>
                  <li><Link to="/conta" className="dropdown__link" onClick={() => setMenuOpen(false)}>Conta</Link></li>
                  <li><Link to="/forum" className="dropdown__link" onClick={() => setMenuOpen(false)}>Forum</Link></li>
                  <li><Link to="/assinatura" className="dropdown__link" onClick={() => setMenuOpen(false)}>Assinatura</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </HeaderMenu>
  );
};

export default Header;
