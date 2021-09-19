import styled from "styled-components"



export const Body = styled.div`
    background-image: url(https://images2.fanpop.com/images/photos/7000000/Space-Art-Wallpaper-space-7076501-1920-1200.jpg);
    background-color: rgba(232, 236, 241, 1);
    background-size: cover;
    background-position: center;
    max-width: 100vw;
    min-height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 90%;
    height: 500px;
    color: #fff;
`

export const Title = styled.div`
    font-size: 90px;
    align-items: center;
`

export const Button = styled.button`
    height: 60px;
    width: 300px;
    border: none;
    color: whitesmoke;
    border-radius: 10px;
    background-color: blueviolet;
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 8%;
    transition: all 0.2s ease-in-out;
    
`