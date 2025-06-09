export default function Header() {
  return (
    <header className="main-header">
      <input type="checkbox" className="burger-check" id="burger-check" />
      <label className="burger" htmlFor="burger-check">
        <div className="burger-line" />
      </label>
      <div className="header-left">
        <a href="">
          <img className="header-logo" src="/assets/images/logo.png" alt="Brand logo" />
        </a>
        {/* ===============    MAIN NAV    =============== */}
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/index.html" className="nav-link">
                Principal
              </a>
            </li>
            <li className="nav-item">
              <a href="/pages/contact/contact.html" className="nav-link">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a href="/pages/about-us/about-us.html" className="nav-link">
                Acerca de
              </a>
            </li>
            <li className="nav-item">
              <a href="/pages/products/products.html" className="nav-link">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a href="/pages/register/register.html" className="nav-link">
                Registro
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <i className="fa-solid fa-cart-shopping" />
        <img src="/assets/images/user.svg" alt="User profile" />
      </div>
    </header>
  );
}
