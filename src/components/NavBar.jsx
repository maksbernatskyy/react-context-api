{/* Import Link and NavLink */}
import { Link, NavLink } from "react-router-dom"

// Import useContext
import { useContext } from "react"
// Import Budget Context
import BudgetContext from "../contexts/BudgetContext"

export default function NavBar() {
    const {budgetMode, setBudgetMode} = useContext(BudgetContext)
    console.log(budgetMode)

    {/* budgetMode is true? yes so be false, no so be true */}
    function handleClick() {
        budgetMode ? setBudgetMode(false) : setBudgetMode(true)
    }

    return (
        <>
          <nav className="navbar navbar-expand-lg">
                <Link className="text-decoration-none text-secondary me-3 fw-bold" to="/">Home Page</Link>
                <NavLink className="text-decoration-none text-secondary me-3 fw-bold" to="/ChiSiamo">Chi Siamo</NavLink>
                <NavLink className="text-decoration-none text-secondary fw-bold" to="/Products">Prodotti</NavLink>
                <button className=" mx-2 btn btn-primary" onClick={handleClick}>
                    {budgetMode ? 'Disable Budget Mode' : 'Active Budget Mode'}
                </button>
            </nav>
        </>
    )
}