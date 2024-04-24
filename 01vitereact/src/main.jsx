import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    "Aapka Swaagat Haiiii!!"
  )
}

const reactElement = React.createElement(
  'a',
  {href : "https://github.com/priyanshukumarsinha", target: "_blank"}, 
  "Click Here to Visit my Github Profile",
  "Click HERE "
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <MyApp/>
  <App/>
)
