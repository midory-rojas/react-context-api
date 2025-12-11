export default function ProdottoSection ({ prodotto }) {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md-5">
                    <img className="img-fluid" src={prodotto.image} alt={prodotto.title}/>
                </div>
                <div className="col-12 col-md-7">
                    <h2>{prodotto.title}</h2>
                    <p>{prodotto.description}</p>
                    <h3>{prodotto.price} €</h3>
                </div>
            </div>
        </div>
    )
}