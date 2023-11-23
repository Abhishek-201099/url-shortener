export default function Header() {
  return (
    <section className="section-header">
      <div className="logo">
        <img src="./logo.svg" alt="website logo" />
      </div>

      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">Features</a>
          </li>
          <li className="nav-item">
            <a href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="#">Resources</a>
          </li>
        </ul>
      </nav>

      <div className="auth">
        <a href="#" className="auth-login">
          Login
        </a>
        <a href="#" className="auth-signup">
          Sign Up
        </a>
      </div>
    </section>
  );
}
