import {Button, Nav} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
import {useCookies} from 'react-cookie'

export default function NavBar() {

    const [cookies, setCookie, removeCookie] = useCookies();
    let navigate = useNavigate();

    const signOut = () => {
        removeCookie("token")
        navigate("/login")
    }

    return (
        <div style={navbarStyle}>
            <div style={menuStyle}>
                <h1>App</h1>
            </div>
            <Button onClick={signOut} variant="primary">Sign Out</Button>{' '}
        </div>
    );
}

const navbarStyle = {
    padding: '10px',
    backgroundColor: '#484c54',

    display: 'flex'
}

const menuStyle = {
    marginRight: 'auto',

    color: '#F2F2F2'
}