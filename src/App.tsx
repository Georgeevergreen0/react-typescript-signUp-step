import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from 'semantic-ui-react';
import Form from "./component/Form/Form"

const App: React.FC = () => {
  return (
    <Router>
      <Header as="h1" className="Header" >User Onboarding</Header>
      <Form />
    </Router>
  );
}

export default App;
