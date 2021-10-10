import React from "react"
import { useHistory } from "react-router-dom"
import { Body, Container, Title, Button } from "./styled"

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
            <Container>
                <Title>LabeX</Title>
                <h2>Encontre as melhores viagens espaciais!</h2>
                <Button onClick={goToListTripsPage}>Viagens</Button>
                <Button onClick={goToLoginPage}>Área Adm</Button>
            </Container>
        </Body>
    )
}