// UseState and useEffect
import { useState, useEffect } from "react"
// Axios
import axios from "axios"
// Link
import { Link } from "react-router-dom"
// ldrs
import { TailChase } from 'ldrs/react'
import 'ldrs/react/TailChase.css'
// Import useContext
import { useContext } from "react"
// Import BudgetContext
import BudgetContext from "../contexts/BudgetContext" 


export default function Products() {

    {/* State della chiamata API */}
    const [todos, setTodos] = useState([])

    {/* State download cards */}
    const [loading, setLoading] = useState(true)

    {/* Call API */}
    function fetchTodos() {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => setTodos(res.data))
        .catch((err) => console.error('Errore:', err))
        .finally(() => setLoading(false))
    }

    {/* useEffect for create in the page one time the list */}
    useEffect(fetchTodos, [])

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