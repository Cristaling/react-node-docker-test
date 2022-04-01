import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

export default function LoginForm() {
    
    const [email, setEmail] = useState("admin");
    const [password, setPassword] = useState("password");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    
    return (
        <Form style={formStyle} onSubmit={handleSubmit}>
            <Form.Group style={formGroupStyle} size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group style={formGroupStyle} size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button style={buttonStyle} block size="lg" type="submit" disabled={!validateForm()}>
                Login
            </Button>
        </Form>
    );
}

const formStyle = {
    width: '100%'
}

const formGroupStyle = {
    marginTop: '20px'
}

const buttonStyle = {
    marginTop: '20px',
    width: '100%'
}