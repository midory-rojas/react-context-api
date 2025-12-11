
import { createContext, useState} from "react";


const BudgetContext = createContext() 

function BudgetForProvider ({children}) {
    const [budget, setBudget] = useState(false)


    const valori = {
        budget,
        setBudget,
    }

    return(

       < BudgetContext.Provider value={valori}>
       {children}
       </BudgetContext.Provider>

    )
}

export {BudgetForProvider, BudgetContext}