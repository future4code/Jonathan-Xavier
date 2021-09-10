import React from "react"
import { useHistory } from "react-router-dom"
import { Header } from "./styled"

export const HomePage = () => {
    
    const history = useHistory()

    const goToListTripsPage = () => {
        history.push("/ListTripsPage")
    }

    const goToLoginPage = () => {
        history.push("/LoginPage")
    }

   
    return (
        <Header>
            <h1>LabeX</h1>
            <button onClick={goToListTripsPage}>Viagens</button>
            <button onClick={goToLoginPage}>Área Adm</button>
        </Header>
    )
}