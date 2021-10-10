import React from "react"

import { HomePage } from "./pages/HomePage/HomePage"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { CreateTripPage } from "./pages/CreateTripPage/CreateTripPage"
import { ListTripsPage } from "./pages/ListTripsPage/ListTripsPage"
import { TripDetailsPage } from "./pages/TripDetailsPage/TripDetailsPage"
import { ApplicationFormPage } from "./pages/ApplicationFormPage/ApplicationFormPage"
import { AdminHomePage } from "./pages/AdminHomePage/AdminHomePage"

import { BrowserRouter, Switch, Route } from 'react-router-dom'


export default function App() {
    return (
    <div className=  "App">
      <BrowserRouter>
        <Switch>

          <Route exact path={"/"}>
              <HomePage />
          </Route>

          <Route exact path={"/LoginPage"}>
              <LoginPage />
          </Route>

          <Route exact path={"/CreateTripPage"}>
              <CreateTripPage />
          </Route>

          <Route exact path={"/ListTripsPage"}>
              <ListTripsPage />
          </Route>

          <Route exact path={"/TripDetailsPage"}>
              <TripDetailsPage />
          </Route>

          <Route exact path={"/ApplicationFormPage"}>
              <ApplicationFormPage />
          </Route>

          <Route exact path={"/AdminHomePage"}>
              <AdminHomePage />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
    );
  }

