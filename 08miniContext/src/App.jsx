import Login from "./components/Login"
import UserContextProvider from "./context/UserContextProvider"
import Profile from "./components/Profile"
import './App.css'

function App() {

  return (
    <UserContextProvider>
     <h1>React Context API Crash Course</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
