import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import { BudgetContext } from "../context/BudgetContext";
import { useContext } from "react";

export default function Header() {
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

    const { budget, setBudget, handleClick } = useContext(BudgetContext) // Use context modo in cui utilliziamo per chiamare per prendere i dati che sttiamo nel budgetcontext

   

    function ModificaTestoBottone() {
        return budget ? "Disattiva budget" : "Imposta budget"
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><Logo /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
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
                        <button className="btn btn-primary" onClick={handleClick}>{ModificaTestoBottone()}</button>
                    </div>
                </div>
            </nav>
        </>
    )
}