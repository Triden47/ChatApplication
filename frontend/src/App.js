import { useContext } from 'react';
//components
import Messenger from './components/Messenger'
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountProvider, { AccountContext } from './context/AccountProvider';
import ChatBox from './components/ChatBox';
import DrawerProvider from './context/DrawerProvider';
import UserProvider from './context/UserProvider'

const PageChange = () => {
  const { account } = useContext(AccountContext)
  // console.log(account)
  return (
    <>
      { account ? <DrawerProvider><ChatBox/></DrawerProvider> : <Messenger/> }
    </>
  )
}

function App() {

  return (
    <AccountProvider>
      <UserProvider>
        <PageChange/>
      </UserProvider>
    </AccountProvider>
  )
}

export default App;
