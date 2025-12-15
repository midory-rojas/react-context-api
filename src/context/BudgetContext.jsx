
import { createContext, useContext, useState} from "react"; //Createcontext permitte di convidiere il context in tutti i componenti


const BudgetContext = createContext() //Primo paso

function BudgetForProvider ({children}) {
    const [budget, setBudget] = useState(false);

    //Creazione della seconda funzione per attivare e dessativare il budget

    function toggleBudget() {
        setBudget((current) => !current);
    }

   


    const contextValue = {
        budget,
        setBudget,
        toggleBudget
    }


    return(

       < BudgetContext.Provider value={contextValue}> 
       {children}
       </BudgetContext.Provider>

    )
}

//Creazione della prima funzione per il uso di budget
function usoBudget() {
    const contextValue = useContext(BudgetContext);
    return contextValue;
}


export {BudgetForProvider, usoBudget}

//Provider ---> Componente speciale quando c'è il createContext

/* Trasformare la modalità budget in un vero e proprio filtro:

Trasformate il booleano budgetMode in un valore numerico maxPrice (es.30, 50ecc). Il valore di partenza deve essere null .
Nel componente navbar al posto del bottone inserite un campo input di tipo number. Questo campo deve essere legato al valore maxPrice del context
Nella pagina prodotti, verranno mostrati soltanto i prodotti con price <= maxPrice
‼️Se max price è null o comunque non è settato, devono essere visualizzati tutti i prodotti */