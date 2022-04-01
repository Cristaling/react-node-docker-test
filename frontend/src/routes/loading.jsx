import { useEffect } from 'react';
import {Spinner} from 'react-bootstrap'
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom';

export const LoadingPage = () => { 
    
    const loadingContainerStyle = {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        color: '#F2F2F2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
    const [cookies, setCookie, removeCookie] = useCookies();
    let navigate = useNavigate();
    
    useEffect(() => {
        // Are we logged in?
        if (cookies.token) {
            navigate("/chart")
        } else {
            navigate("/login")
        }
    }) 

    return (
        <div style={loadingContainerStyle}>
            <Spinner animation="border" size="lg"/>
        </div>
    );
}