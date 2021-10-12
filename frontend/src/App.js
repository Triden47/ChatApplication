//components
import Messenger from './components/Messenger'
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountProvider from './context/AccountProvider';
function App() {
    return (
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    )
}

export default App;
