import React from 'react';
import { useHistory } from "react-router-dom";

import {
    Button,
    Form,
} from 'semantic-ui-react'

const StepTwo: React.FC = () => {
    const history = useHistory();

    const nextStep = (e: any) => {
        e.preventDefault();
        history.push("/onbording/3")
    }

    return (
        <Form>
            <Form.Field>
                <label>What college did you go to?</label>
                <input placeholder='UC Irvine' />
            </Form.Field>

            <Form.Field>
                <label>What was the last company you worked at?</label>
                <input placeholder='Accenture' />
            </Form.Field>

            <Form.Field>
                <label>How many years of experience do you have</label>
                <input placeholder='3-5' />
            </Form.Field>

            <Form.Field  >
                <Button primary className="Botton" onClick={nextStep} >Contiune</Button>
            </Form.Field>
        </Form>
    )
}

export default StepTwo;