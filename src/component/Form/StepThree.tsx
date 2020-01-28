import React from 'react';

import {
    Button,
    Form,
    TextArea,
} from 'semantic-ui-react'

const StepThree: React.FC = () => {

    return (
        <Form>
            <Form.Field>
                <label>What are you interested in software engineering?</label>
                <TextArea rows={10} placeholder="I'm interested in software engineering because I love building things. I've been Interested in mathematics since I was a little kid and I think software brings together both mathematics and creativity in a beautiful way" />
            </Form.Field>
            <Form.Field  >
                <Button primary className="Botton">Finish</Button>
            </Form.Field>
        </Form>
    )
}

export default StepThree