import React from "react"
import { useHistory } from "react-router-dom"

export const HomePage = () => {
    
    const history = useHistory()

    const goToAdminHomePage = () => {
        history.push("/AdminHomePage")
    }
    
    const goToListTripsPage = () => {
        history.push("/ListTripsPage")
    }

   
    return (
        <div>
            <h1>LabeX</h1>
            <button onClick={goToListTripsPage}>Viagens</button>
            <button onclick={goToAdminHomePage}>Área Adm</button>
        </div>
    )
}