
import { createContext, useState} from "react"; //Createcontext permitte di convidiere il context in tutti i componenti


const BudgetContext = createContext() //Primo paso

function BudgetForProvider ({children}) {
    const [budget, setBudget] = useState(false)


    const valori = {
        budget,
        setBudget,
        handleClick,
    }

        function handleClick() {
        return setBudget(prev => prev ? false : true);
    }

    return(

       < BudgetContext.Provider value={valori}> 
       {children}
       </BudgetContext.Provider>

    )
}

export {BudgetForProvider, BudgetContext}

//Provider ---> Componente speciale quando c'è il createContext