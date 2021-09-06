import React from "react"
import { ListItemContainer, RoundImage } from "./styled"

export const ProfileListItem = () {
        return (
            <ListItemContainer>
                <RoundImage src={"https://picsum.photos/50/50?=1"}/>
                <h2>Nomezera</h2>
            </ListItemContainer>
        )
}