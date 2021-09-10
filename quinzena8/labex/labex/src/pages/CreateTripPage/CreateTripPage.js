import React from "react"
import { useHistory } from "react-router-dom"

export const CreateTripPage = () => {

    const history = useHistory()

    const goToBack = () => {
        history.goBack()
    }

    return (
        <div>
            <p>CreateTripPage</p>
            <button onClick={goToBack}>Voltar</button>
            <button>Criar</button>
        </div>
    )
}