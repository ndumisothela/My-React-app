import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo-area">
        <div className="tooltip">
          <span className="material-icons-outlined">menu</span>
          <span className="tooltip-text">Main menu</span>
        </div>

        <img
          className="gb_uc gb_7d"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt=""
          aria-hidden="true"
        />

        <span className="logo-text">Keep</span>
      </div>
      <div className="search-area">
        <div className="tooltip">
          <span className="material-icons-outlined">search</span>
          <span className="tooltip-text">Search</span>
        </div>
        <input type="text" placeholder="search" />
      </div>
      <div className="settings-area">
        <div className="tooltip">
          <span className="material-icons-outlined">refresh</span>
          <span className="tooltip-text">Refresh</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined">view_agenda</span>
          <span className="tooltip-text">List view</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined">settings</span>
          <span className="tooltip-text">settings</span>
        </div>
      </div>
      <div className="profile-action-area">
        <div className="tooltip">
          <span className="material-icons-outlined">apps</span>
          <span className="tooltip-text">Google apps</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined">account_circle</span>
          <span className="tooltip-text">Profile</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
