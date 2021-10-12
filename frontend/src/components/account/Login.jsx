import { Button } from 'react-bootstrap'
import Monitor from '../../images/monitor.png'
import GoogleIcon from '@mui/icons-material/Google';
import GoogleLogo from '../../images/Google.png'
const Login = () => {
    return (
        <div className="login">
            <h2>Lets get started</h2>
            <Button> 
                <img src={GoogleLogo} alt="None" style={{ width: 35 }}/>
                Sign in with Google</Button>
        </div>
    );
};

export default Login;
