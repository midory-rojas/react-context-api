import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import { usoBudget } from "../context/BudgetContext"; //Importo la funzione usoBudget per usarlo dentro il header


export default function Header() {
    const { toggleBudget, budget } = usoBudget();

    //Chiamo alle funzione che sono all'intern di usoBudget per usarlo e richiamarlo dentro del bottone
    // toggleBudget e budget
    

    
    const links = [{
        nome: "Homepage",
        path: "/",
    },
    {
        nome: "Chi siamo",
        path: "/chi-siamo",
    },
    {
        nome: "Prodotti",
        path: "/prodotti",
    }
    ]


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><Logo /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            {links.map((link, index) => (
                                <NavLink key={index}
                                    className="nav-link"
                                    aria-current="page"
                                    to={link.path}
                                >
                                    {link.nome}
                                </NavLink>
                            ))}
                        </ul>
                        {/* Faccio la condizione con ternario per Attivare e Desattivare il bottone, anche aggiungo temmplate literal per cambiare il colore nella condizione */}
                        <button  onClick={toggleBudget} className={`btn btn-${budget ? "light" : "secondary"}`}>{budget ? "Disattiva risparmio" : "Risparmia prodotti sotto 30€"}</button> 
                    </div>
                </div>
            </nav>
        </>
    )
}