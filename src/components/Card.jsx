import { Link } from "react-router-dom";
import Prodotti from "../pages/Prodotti";

export default function Card({ prodotto }) {
    const { image, category, description, title, price } = prodotto;
    return (
        <div className="card h-100">
            <img src={image} className="card-img" alt={title} height={450}/>
            <div className="card-body">
                <h5>{title}</h5>
                <p>{price}€</p>
                <Link to={`/prodotti/${prodotto.id}`}>Vedi dettaglio</Link>
            </div>
        </div>
    )
}
