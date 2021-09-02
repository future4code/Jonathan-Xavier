import React from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchesPage } from "./pages/MatchesPage/MatchesPage"
import styled from "styled-components";

const homePageDesign = styled.div`
    background-color: violet;
`;

export default class App extends React.Component {
  state = {
    homePage: "HomePage"
  };
  
  chooseScreen = () => {
    switch (this.state.homePage) {
      case "HomePage":
        return <HomePage />;
      case "MatchesPage":
        return <MatchesPage />;
      default: 
        return <HomePage />;
    }
  };


  changeScreen = (nameScreen) => {
    this.setState({ chooseScreen: nameScreen });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.changeScreen("MatchesPage")}>Matches</button>
        <button onClick={() => this.changeScreen("HomePage")}>HomePage</button>
        {this.chooseScreen()}
      </div>
    );
  }
}