{/* Import Link and NavLink */}
import { Link, NavLink } from "react-router-dom"

export default function NavBar() {

    return (
        <>
          <nav className="navbar navbar-expand-lg">
                <Link className="text-decoration-none text-secondary me-3 fw-bold" to="/">Home Page</Link>
                <NavLink className="text-decoration-none text-secondary me-3 fw-bold" to="/ChiSiamo">Chi Siamo</NavLink>
                <NavLink className="text-decoration-none text-secondary fw-bold" to="/Products">Prodotti</NavLink>
                <button className=" mx-2 btn btn-primary">
                    Budget Mode
                </button>
            </nav>
        </>
    )
}