import React from "react"
import { useHistory } from "react-router-dom"

export const AdminHomePage = () => {

    const history = useHistory()

    const goToBack = () => {
        history.goBack()
        
    }
    return (
        <div>
            <p>AdminHomePage</p>
            <button onClick={goToBack}>Voltar</button>
            <button>Criar Viagem</button>
            <button>Logout</button>
        </div>
    )
}