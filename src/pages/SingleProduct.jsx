import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function SingleProduct() {

    const[singleCard, setSingleCard] = useState({})

    {/* Params for id */}
    const { id } = useParams()

    {/* Call API for the single card */}
    function fetchCard() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => setSingleCard(res.data))
        .catch((err) => console.error('Errore:', err))
    }

    useEffect(fetchCard, [])

    return (
        <>
        <div className="container mt-4">
            <div id="singleCard" className="card p-3">
                <div>
                    <img className="card-img-top" src={singleCard.image} alt="" />
                </div>
                <div className="card-body">
                    <span className="text-uppercase fw-bold d-block">{singleCard.title}</span>
                    <span className="d-block"><strong>Price:</strong> "{singleCard.price} €"</span>
                    <span className="d-block"><strong>Category:</strong> "{singleCard.category}"</span>
                </div>
            </div>
        </div>
        </>
    )
}