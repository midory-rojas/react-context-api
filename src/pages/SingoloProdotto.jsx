import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProdottoSection from "../components/ProdottoSection";


export default function SingoloProdotto() {
    const { id } = useParams();
    const [prodotto, setProdotto] = useState(null);
    const navigate = useNavigate();





    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            //console.log(resp);
            if (resp.data) {
                setProdotto(resp.data)
            } else {
                navigate("/prodotti");
            }
        });
    }, [id]);

    return (
        <section>
            {prodotto !== null &&
                <ProdottoSection prodotto={prodotto} />}
            <button className="btn btn-dark ms-5" onClick={() => navigate(-1)}>
                Ritorna nella pagina precedente
            </button>
        </section>

    )

}