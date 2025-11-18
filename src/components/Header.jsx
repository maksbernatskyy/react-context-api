import logo from "../assets/img/logo.jpeg"

{/* Import Link and NavLink */}
import { Link, NavLink } from "react-router-dom"

export default function Header() {

    return (
        <>
          <header className="p-3">
            <div className="d-flex justify-content-between">
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <div>
                    <nav className="navbar navbar-expand-lg">
                        <Link className="text-decoration-none text-secondary me-3 fw-bold" to="/">Home Page</Link>
                        <NavLink className="text-decoration-none text-secondary me-3 fw-bold" to="/ChiSiamo">Chi Siamo</NavLink>
                        <NavLink className="text-decoration-none text-secondary fw-bold" to="/Products">Prodotti</NavLink>
                    </nav>
                </div>
            </div>
          </header>
        </>
    )
}