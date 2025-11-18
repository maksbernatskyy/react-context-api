{/* Import Link and NavLink */}
import { Link, NavLink } from "react-router-dom"

// Import useContext
import { useContext } from "react"
// Import Budget Context
import BudgetContext from "../contexts/BudgetContext"

export default function NavBar() {
    const {budgetMode, setBudgetMode} = useContext(BudgetContext)

    function handleClick() {
        budgetMode ? setBudgetMode(false) : setBudgetMode(true)
        console.log(budgetMode)
    }

    return (
        <>
          <nav className="navbar navbar-expand-lg">
                <Link className="text-decoration-none text-secondary me-3 fw-bold" to="/">Home Page</Link>
                <NavLink className="text-decoration-none text-secondary me-3 fw-bold" to="/ChiSiamo">Chi Siamo</NavLink>
                <NavLink className="text-decoration-none text-secondary fw-bold" to="/Products">Prodotti</NavLink>
                <button className=" mx-2 btn btn-primary" onClick={handleClick}>
                    Budget Mode
                </button>
            </nav>
        </>
    )
}