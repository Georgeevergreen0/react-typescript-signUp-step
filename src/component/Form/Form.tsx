import React from 'react';
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import { Header } from 'semantic-ui-react';
import { Switch, Redirect, Route } from "react-router-dom";

const Form: React.FC = () => {

    let route = (<Switch >
        <Route path="/onbording/1">
            <Header as="h5" className="SubHeader" >Part 1/3 - Basic Questions</Header>
            <StepOne />
        </Route>
        <Route path="/onbording/2">
            <Header as="h5" className="SubHeader" >Part 2/3 - Experience Questions</Header>
            <StepTwo />
        </Route>
        <Route path="/onbording/3">
            <Header as="h5" className="SubHeader" >Part 3/3 - Short Response Question</Header>
            <StepThree />
        </Route>
        <Redirect to="/onbording/1" />
    </Switch>
    )


    return route;
}

export default Form