
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