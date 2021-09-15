import { useEffect } from "react";
import React from "react"
import axios from 'axios'

export const TripDetailsPage = () => {
    useEffect(() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/jonathan-xavier/trip/NoIFVcOiSgTKTIPVZwXS")
        .then((response) => {

        }).catch(() => {

        })
    }, [])
    return <div>
                <h1>Detalhes das viagens</h1>
            </div>
}