// import { Button } from 'react-bootstrap'
// import Monitor from '../../images/monitor.png'
// import GoogleIcon from '@mui/icons-material/Google';
// import GoogleLogo from '../../images/Google.png'
import { useContext } from 'react'
import { GoogleLogin } from 'react-google-login'
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../api/api';

const Login = () => {
    const clientID = process.env.REACT_APP_GOOGLE_ID

    const { setAccount } = useContext(AccountContext)
    const handleSuccess = async (res) => {
        setAccount(res.profileObj)
        await addUser(res.profileObj)
    }
    const handleFailure = (res) => {
        console.log(res)
    }
    return (
        <div className="login">
            <h2>Lets get started</h2>
            <GoogleLogin
                clientId={clientID}
                isSignedIn={true}
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
                // theme="dark"
                // style={{ backgroundColor: "blue" }}
            />
            {/* <Button> 
                <img src={GoogleLogo} alt="None" style={{ width: 35 }}/>
                Sign in with Google</Button> */}
        </div>
    );
};

export default Login;
