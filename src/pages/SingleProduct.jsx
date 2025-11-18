import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SingleProduct() {

    {/* State for single card */}
    const [card, setCard] = useState({})

    {/* Params for id */}
    const { id } = useParams()

    {/* Function for call the API */}
    function fetchCard() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {setCard(res.data)})
        .catch((err) => {console.error('Errore:', err)})
    }

    useEffect(fetchCard, [] )

    return (
        <>
        <div className="container mt-4">
            <div id="singleCard" className="card p-3">
                <div>
                    <img className="card-img-top" src={card.image} alt="" />
                </div>
                <div className="card-body">
                    <span className="text-uppercase fw-bold d-block">{card.title}</span>
                    <span className="d-block"><strong>Price:</strong> "{card.price} €"</span>
                    <span className="d-block"><strong>Category:</strong> "{card.category}"</span>
                </div>
            </div>
        </div>
        </>
    )
}