import React from "react"
import { useHistory } from "react-router-dom"

export const TripDetailsPage = () => {

    const history = useHistory()

    const goToBack = () => {
        history.goBack()
    }

    return (
        <div>
            <p>TripDetailsPage</p>
            <button onClick={goToBack}>Voltar</button>
            <button>Aprovar</button>
            <button>Reprovar</button>
        </div>
    )
}