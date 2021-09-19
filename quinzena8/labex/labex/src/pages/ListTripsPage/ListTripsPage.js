import React from "react"
import { useHistory } from "react-router-dom"
import { Body } from "../ListTripsPage/styled"
import { Container } from "../LoginPage/styled"

export const ListTripsPage = () => {

    const history = useHistory()

    const goToBack = () => {
        history.goBack()
    }

    return (
        <Body>
            <Container>
                <p>ListTripsPage</p>
                <button onClick={goToBack}>Voltar</button>
                <button>Inscrever-se</button>
            </Container>
        </Body>
    )
}