import React from "react";
export default function Navbar(props) {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg text-bg-danger p-3 "
          data-bs-theme=""
        >
          <div className="container-fluid">
            <a className="navbar-brand text-center" href="#">
              <strong>ＰＡＫＣＡＲＳ</strong>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Auto Store
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Services
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Contact Us
                  </a>
                </li>

              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-dark" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
