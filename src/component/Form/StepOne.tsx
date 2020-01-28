import React from 'react';
import { useHistory } from "react-router-dom";
import {
    Button,
    Form,
} from 'semantic-ui-react'

const StepOne: React.FC = () => {
    const history = useHistory()
    const nextStep = (e: any) => {
        e.preventDefault();
        history.push("/onbording/2")
    }
    return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Field>
                    <label> First Name</label>
                    <input placeholder='John' />
                </Form.Field>
                <Form.Field>
                    <label> Last Name</label>
                    <input placeholder='Smith' />
                </Form.Field>
            </Form.Group>

            <Form.Field>
                <label> Email</label>
                <input type="Email" placeholder="johnsmith@thefuture.school" />
            </Form.Field>

            <Form.Field>
                <label> Phone Number</label>
                <input type="Number" placeholder='123456789' />
            </Form.Field>
            <Form.Field  >
                <Button primary className="Botton" onClick={nextStep} >Contiune</Button>
            </Form.Field>
        </Form>
    )
}

export default StepOne