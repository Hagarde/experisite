import Form from 'react-bootstrap/Form';
import React from "react";

const Questionnaire = () => {
return (
    <div>
        <Form.Label htmlFor="inputPassword5"> Votre avis sur la longueur de l'expérience </Form.Label>
        <Form.Control
            type="text"
            aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>

        </Form.Text>
        <Form.Label htmlFor="inputPassword5"> Votre avis sur la clareté </Form.Label>
        <Form.Control
            type="text"
            aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>

        </Form.Text>
        <button type="submit"> Envoyer </button>
    </div>
)
}

export default Questionnaire;