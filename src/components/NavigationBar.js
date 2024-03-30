function Navbar({navValue}) {
  return (
    <nav>
      <div className="container">
        <h1>Logo</h1>
        <ul>
          <li><a href="#">Beranda</a></li>
          <li><a href="#">{!navValue ? "About" : navValue}</a></li>
          <li><a href="#">Layanan</a></li>
          <li><a href="#">Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;