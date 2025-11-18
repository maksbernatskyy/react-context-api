// UseState and useEffect
import { useState, useEffect } from "react"
// Link
import { Link } from "react-router-dom"
// ldrs
import { TailChase } from 'ldrs/react'
import 'ldrs/react/TailChase.css'
// Cards
import cards from "../assets/img/cards"

// Import useContext
import { useContext } from "react"
// Import BudgetContext
import BudgetContext from "../contexts/BudgetContext" 
import NavBar from "../components/NavBar"




export default function Products() {

    {/* Array of cards */}
    <cards />

    {/* State della chiamata API */}
    const [todos, setTodos] = useState(cards)

    {/* State download cards */}
    const [loading, setLoading] = useState(false)

    {/* useEffect for create in the page one time the list */}
    useEffect(() => {
        setTodos(todos)
    }, [])

    {/* useContext */}
    const {budgetMode} = useContext(BudgetContext)
    console.log(budgetMode)

    {/* State for filtered list */}
    const [filteredList, setFilteredList] = useState([])

    {/* useEffect for filtered list */}
    useEffect(() => {
        const newList = budgetMode ? 
        todos.filter((thisTodo) => thisTodo.price < 30)
        : todos

      setFilteredList(newList)
    }, [budgetMode])

    return (
        <>
        <main>
            <div className="container my-5">

                {/* Loading */}
                {
                    loading ? (
                        <TailChase
                            size="40"
                            speed="1.75"
                            color="black" 
                        />
                    ) : (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-4">
                            {
                                filteredList.map((thisTodo) => (
                                    <div key={thisTodo.id} className="col">
                                        <div className="card h-100 p-0">
                                            <div className="card-top p-3">
                                                <img className="card-img-top" src={thisTodo.image} alt="Image" />
                                            </div>
                                            <div className="card-body">
                                                <span className="text-uppercase fw-bold d-block">{thisTodo.title}</span>
                                                <span className="d-block"><strong>Price:</strong> "{thisTodo.price} €"</span>
                                                <span className="d-block"><strong>Category:</strong> "{thisTodo.category}"</span>
                                                <Link className="text-decoration-none btn btn-dark mt-2" to={`/Products/${thisTodo.id}`}>Go to Card</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }

                
            </div>
        </main>
        </>
    )
}