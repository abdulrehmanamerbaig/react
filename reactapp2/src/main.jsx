import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return (
        <div>
            <h1>My App...</h1>
        </div>
    )
}

function Link(){
    return (
        <div>
            <a href="google.com" target='_blank'> Click me to</a>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(  
    <>
        <MyApp />
        <App />
    </>
)
