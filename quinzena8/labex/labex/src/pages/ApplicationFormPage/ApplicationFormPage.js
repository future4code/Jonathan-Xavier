import React from "react"
import { useHistory } from "react-router-dom"

export const ApplicationFormPage = () => {

    const history = useHistory()

    const goToBack = () => {
        history.goBack()
    }
    
    return (
        <div>
            <p>ApplicationFormPage</p>
            <button onClick={goToBack}>Voltar</button>
            <button>Enviar</button>
        </div>
    )
}