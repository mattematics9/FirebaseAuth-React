import './App.css'
import { useContext } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { UserContext } from './providers/UserProvider'

function App() {

  const { currentUser } = useContext(UserContext);

  const jsx = currentUser? <Profile/>: 
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
    </div>
    
  return (
    <BrowserRouter>
      <Navbar/>
      <br/><br/>
      {jsx}
    </BrowserRouter>
  );
}

export default App;
