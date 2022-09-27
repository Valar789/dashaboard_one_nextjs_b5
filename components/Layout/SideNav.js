import TopNav from "./TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faColumns,
  faAngleDown,
  faBookOpen,
  faChartArea,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import Link from "next/link";

export default function SideNav({ children }) {
  const sidebar = useRef();
  const toggleSideBar = (e) => {
    e.preventDefault();
    sidebar.current.classList.toggle("sb-sidenav-toggled");
    localStorage.setItem(
      "sb|sidebar-toggle",
      sidebar.current.classList.contains("sb-sidenav-toggled")
    );
  };

  return (
    <layout ref={sidebar}>
      <TopNav toggleSideBar={toggleSideBar} />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <Link href="/">
                <a className="nav-link" >
                  <div className="sb-nav-link-icon">
                    <FontAwesomeIcon icon={faTachometerAlt} />
                  </div>
                  Dashboard
                </a>
                </Link>
                <div className="sb-sidenav-menu-heading">Interface</div>
                <Link href="#">
                <a
                  className="nav-link collapsed"
                  
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <FontAwesomeIcon icon={faColumns} />
                  </div>
                  Layouts
                  <div className="sb-sidenav-collapse-arrow">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                </a>
                </Link>
                <div
                  className="collapse"
                  id="collapseLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link href="layout-static.html"><a className="nav-link" >
                      Static Navigation
                    </a></Link>
                    <Link href="layout-sidenav-light.html"><a className="nav-link" >
                      Light Sidenav
                    </a></Link>
                  </nav>
                </div>
           <Link href="#">
           <a
                  className="nav-link collapsed"
                  
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePages"
                  aria-expanded="false"
                  aria-controls="collapsePages"
                >
                  <div className="sb-nav-link-icon">
                    <FontAwesomeIcon icon={faBookOpen} />
                    <i className="fas fa-book-open"></i>
                  </div>
                  Pages
                  <div className="sb-sidenav-collapse-arrow">
                    <FontAwesomeIcon icon={faAngleDown} />
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
           </Link>
                <div
                  className="collapse"
                  id="collapsePages"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav
                    className="sb-sidenav-menu-nested nav accordion"
                    id="sidenavAccordionPages"
                  >
                    <Link href="#">
                    <a
                      className="nav-link collapsed"
                      
                      data-bs-toggle="collapse"
                      data-bs-target="#pagesCollapseAuth"
                      aria-expanded="false"
                      aria-controls="pagesCollapseAuth"
                    >
                      Authentication
                      <div className="sb-sidenav-collapse-arrow">
                        <FontAwesomeIcon icon={faAngleDown} />
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </a>
                    </Link>
                    <div
                      className="collapse"
                      id="pagesCollapseAuth"
                      aria-labelledby="headingOne"
                      data-bs-parent="#sidenavAccordionPages"
                    >
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link href="login.html"><a className="nav-link" >
                          Login
                        </a></Link>
                        <Link href="register.html"><a className="nav-link" >
                          Register
                        </a></Link>
                        <Link href="password.html"><a className="nav-link" >
                          Forgot Password
                        </a></Link>
                      </nav>
                    </div>
                    <Link href="#">
                    <a
                      className="nav-link collapsed"
                      
                      data-bs-toggle="collapse"
                      data-bs-target="#pagesCollapseError"
                      aria-expanded="false"
                      aria-controls="pagesCollapseError"
                    >
                      Error
                      <div className="sb-sidenav-collapse-arrow">
                        <FontAwesomeIcon icon={faAngleDown} />
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </a>
                    </Link>
                    <div
                      className="collapse"
                      id="pagesCollapseError"
                      aria-labelledby="headingOne"
                      data-bs-parent="#sidenavAccordionPages"
                    >
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link href="401.html"><a className="nav-link" >
                          401 Page
                        </a></Link>
                        <Link href="404.html"><a className="nav-link" >
                          404 Page
                        </a></Link>
                        <Link href="500.html"><a className="nav-link" >
                          500 Page
                        </a></Link>
                      </nav>
                    </div>
                  </nav>
                </div>
                <div className="sb-sidenav-menu-heading">Addons</div>
                <Link href="charts.html"><a className="nav-link" >
                  <div className="sb-nav-link-icon">
                    <FontAwesomeIcon icon={faChartArea} />
                    <i className="fas fa-chart-area"></i>
                  </div>
                  Charts
                </a></Link>
                <Link href="tables.html">
                <a className="nav-link" >
                  <div className="sb-nav-link-icon">
                    <FontAwesomeIcon icon={faTable} />
                    <i className="fas fa-table"></i>
                  </div>
                  Tables
                </a>
                </Link>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Start Bootstrap
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>
            {children}
           
          </main>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright &copy; Your Website 2022</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </layout>
  );
}
