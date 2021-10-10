import React, { useEffect, useState } from "react"
import {HomeContainer, Profile, ProfileImage} from "./styled"
import axios from "axios"

export const HomePage = () => {
  const [profile, setProfile] = useState({})
  
  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jonathan-xavier-johnson/person"
  
  useEffect(() => {
      getProfile()
  }, [])
  
  const getProfile = () => {
    axios.get(url)
    .then((res) => {
        setProfile(res.data.profile)
    })
    .catch((err) => {

    })
  }

  const choosePerson = () => {

  }
    return (
      <HomeContainer>
          {!profile ? <div>Acabaram os perfis! Aperte o bot~ao de voltar</div>:
          <Profile>
              <ProfileImage src={profile.photo}/>
              <h2>{profile.name}, {profile.age}</h2>
              <p>{profile.bio}</p>
              <div>
                <button onClick={choosePerson}>X</button>
                <button onClick={choosePerson}>S2</button>
              </div>
          </Profile>
          }
      </HomeContainer>
    )
}