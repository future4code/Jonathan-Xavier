import React from "react"
import { useHistory } from "react-router-dom"

export const LoginPage = () => {

    const history = useHistory()

    const goToBack = () => {
        history.goBack()
    }

    const goToAdminHomePage = () => {
        history.push("/AdminHomePage")
    }

    return (
        <div>
            <p>LoginPage</p>
            <button onClick={goToBack}>Voltar</button>
            <button onClick={goToAdminHomePage}>Entrar</button>
        </div>
    )
}