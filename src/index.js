import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogInPage from "../src/components/login-page";
import SignUpPage from "../src/components/signup-page";
import { AuthProvider } from "../src/contexts/AuthContext";
import DashBoard from "./components/Dashboard";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import Adc from "./routes/adc";
import AdcBuilds from "./routes/adc-builds";
import AdcMatchups from "./routes/adc-matchups";
import AdcTalk from "./routes/adc-talk";
import AdcTeams from "./routes/adc-teams";
import Home from "./routes/home";
import Jungle from "./routes/jungle";
import JungleBuilds from "./routes/jungle-builds";
import JungleMatchups from "./routes/jungle-matchups";
import JungleTalk from "./routes/jungle-talk";
import JungleTeams from "./routes/jungle-teams";
import Mid from "./routes/mid";
import MidBuilds from "./routes/mid-builds";
import MidMatchups from "./routes/mid-matchups";
import MidTalk from "./routes/mid-talk";
import MidTeams from "./routes/mid-teams";
import Support from "./routes/support";
import SupportBuilds from "./routes/support-builds";
import SupportMatchups from "./routes/support-matchups";
import SupportTalk from "./routes/support-talk";
import SupportTeams from "./routes/support-teams";
import Top from "./routes/top";
import TopBuilds from "./routes/top-builds";
import TopMatchups from "./routes/top-matchups";
import TopTalk from "./routes/top-talk";
import TopTeams from "./routes/top-teams";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <AuthProvider>
        <Route exact path="/" component={Home} />
        <Route path="/top" component={Top} />
        <Route path="/mid" component={Mid} />
        <Route path="/jungle" component={Jungle} />
        <Route path="/adc" component={Adc} />
        <Route path="/support" component={Support} />
        <Route path="/top-matchups" component={TopMatchups} />
        <Route path="/top-builds" component={TopBuilds} />
        <Route path="/top-teams" component={TopTeams} />
        <Route path="/top-talk" component={TopTalk} />

        <Route path="/mid-matchups" component={MidMatchups} />
        <Route path="/mid-builds" component={MidBuilds} />
        <Route path="/mid-teams" component={MidTeams} />
        <Route path="/mid-talk" component={MidTalk} />

        <Route path="/jungle-matchups" component={JungleMatchups} />
        <Route path="/jungle-builds" component={JungleBuilds} />
        <Route path="/jungle-teams" component={JungleTeams} />
        <Route path="/jungle-talk" component={JungleTalk} />

        <Route path="/adc-matchups" component={AdcMatchups} />
        <Route path="/adc-builds" component={AdcBuilds} />
        <Route path="/adc-teams" component={AdcTeams} />
        <Route path="/adc-talk" component={AdcTalk} />

        <Route path="/support-matchups" component={SupportMatchups} />
        <Route path="/support-builds" component={SupportBuilds} />
        <Route path="/support-teams" component={SupportTeams} />
        <Route path="/support-talk" component={SupportTalk} />

        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LogInPage} />

        <Route path="/dashboard" component={DashBoard} />
      </AuthProvider>
    </Switch>
  </BrowserRouter>,
  rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
