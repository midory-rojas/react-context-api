import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { usoBudget } from "../context/BudgetContext"; //Importo il hook che ho creato dentro BudgetContext 


export default function Prodotti() {

    const [prodotti, setProdotti] = useState([]);
    const { budget } = usoBudget(); //Chiamo alla variabile budget 

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((resp) => {
            console.log(resp)
            setProdotti(resp.data);

        });
    }, []);

    // Faccio la condizione ed anche filter per accedere a prodotti che costano <=30
    const filtProdotti = budget 
    ? prodotti.filter((curProdotto) => curProdotto.price <=30) : prodotti;

    return (
        <div>
            <div className="container text-center py-5">
                <h1>Prodotti</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {filtProdotti.map((prodotto) => (
                        <div className="col" key={prodotto.id}>
                            <Card prodotto={prodotto} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}