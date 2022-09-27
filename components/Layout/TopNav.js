import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function TopNav({toggleSideBar}) {


    return (
        <nav className=" sb-topnav navbar navbar-expand navbar-dark bg-dark">
        
            <Link href="/"><a className="navbar-brand ps-3" >Start Bootstrap</a></Link>
        
            <button onClick={toggleSideBar} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><FontAwesomeIcon icon={faBars} /></button>
        
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </form>

            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <Link href="#"><a className="nav-link dropdown-toggle" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a></Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><Link href="#!"><a className="dropdown-item" >Settings</a></Link></li>
                        <li><Link href="#!"><a className="dropdown-item" >Activity Log</a></Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link href="#!"><a className="dropdown-item" >Logout</a></Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}