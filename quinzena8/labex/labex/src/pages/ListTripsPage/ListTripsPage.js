import React from "react"
import { useHistory } from "react-router-dom"

export const ListTripsPage = () => {

    const history = useHistory()

    const goToBack = () => {
        history.goBack()
    }

    return (
        <div>
            <p>ListTripsPage</p>
            <button onClick={goToBack}>Voltar</button>
            <button>Inscrever-se</button>
        </div>
    )
}