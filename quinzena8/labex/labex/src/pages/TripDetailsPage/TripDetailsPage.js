import { useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import React from "react";

const useProtectedPage = () => {
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token === null) {
            history.push('login')
        }
    }, [])
    
}

export const TripDetailsPage = () => {
    useProtectedPage()


    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labeX/jonathan-xavier/trip/NoIFVcOiSgTKTIPVZwXS")
                    headers: {
                        auth: token
            }
        }
    )
        
        .then((response) => {

        }).catch(() => {

        })
    return <div>
                <h1>Detalhes das viagens</h1>
            </div>
}