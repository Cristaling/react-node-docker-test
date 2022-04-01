import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useCookies} from 'react-cookie'

export default function LoginForm() {
    
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("password");
    const [error, setError] = useState(undefined);
    const [cookies, setCookie, removeCookie] = useCookies();

    let navigate = useNavigate();

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        var body = {
            username: username,
            password: password
        };
        
        axios.post("/login", body)
          .then(function (response) {
            // if (response.data && response.data.token) {
            //     setCookie("token", response.data.token);
            // }
            // If we got a response, it is already in the cookie
            navigate("/chart")
          })
          .catch(function (error) {
            if (error.response) {
                setError(error.response.data);
            }
          });
    }
    
    return (
        <Form style={formStyle} onSubmit={handleSubmit}>
            {error ? 
            <Alert variant="danger" onClose={() => setError(undefined)} dismissible>
                <h5>{error}</h5>
            </Alert> : ""}
            <Form.Group style={formGroupStyle} size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
            <Button style={buttonStyle} size="lg" type="submit" disabled={!validateForm()}>
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