import { useParams } from "react-router-dom"
import cards from "../assets/img/cards"

export default function SingleProduct() {

    <cards />

     

    {/* Params for id */}
    const { id } = useParams()

    {/* Find the product with id */}
    const card = cards.find((thisCard) => thisCard.id === Number(id))

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