import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Prodotti() {
    const [prodotti, setProdotti] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((resp) => {
            console.log(resp)
            setProdotti(resp.data);

        });
    }, []);

    return (
        <div>
            <div className="container text-center py-5">
                <h1>Prodotti</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {prodotti.map((prodotto) => (
                        <div className="col" key={prodotto.id}>
                            <Card prodotto={prodotto} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}