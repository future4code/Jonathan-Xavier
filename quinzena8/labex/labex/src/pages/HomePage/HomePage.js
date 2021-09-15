import React from "react"
import { useHistory } from "react-router-dom"
import { Body } from "./styled"

export const HomePage = () => {
    
    const history = useHistory()

    const goToListTripsPage = () => {
        history.push("/ListTripsPage")
    }

    const goToLoginPage = () => {
        history.push("/LoginPage")
    }

   
    return (
        <Body>
            <h1>LabeX</h1>
            <h2>Encontre as melhores viagens espaciais!</h2>
            <button onClick={goToListTripsPage}>Viagens</button>
            <button onClick={goToLoginPage}>Área Adm</button>
        </Body>
    )
}