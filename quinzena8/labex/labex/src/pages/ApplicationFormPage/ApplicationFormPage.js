import React from "react"
import { useHistory } from "react-router-dom"

export const ApplicationFormPage = () => {

    const history = useHistory()

    const goToBack = () => {
        history.goBack()
    }

    const goToApplicationTrip = () => {
        history.push("/trips/list")
        alert("Inscrição concluida, aguarde contato")
    }
    
    return (
        <div>
            <p>ApplicationFormPage</p>
            <button onClick={goToBack}>Voltar</button>
            <button onClick={goToApplicationTrip}>Enviar</button>
        </div>
    )
}

