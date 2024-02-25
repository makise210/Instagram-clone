import React, {useState} from 'react'
import './Authentication.css'
import Login from './Login'
import Signup from './Signup'

function Authentication() {
    const [active, setActive] = useState("login");

    const handleChange = () => {
        setActive(active === "login" ? "signup" : "login")
    }

  return (
    <div className='authentication'>
        <div className='auth__left'>
            <img src="https://images.unsplash.com/photo-1523536777042-c391e30190ef?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGJ1Y2t8ZW58MHx8MHx8fDA%3D" alt="" />
        </div> 
        <div className='auth__right'>
            {active === "login" ? <Login /> : <Signup />}
            <div className="auth__more">
                <span>
                {active === "login" ? (
                    <>
                        Don't have an account? <button onClick={handleChange}>Sign up</button> 
                    </>) : (
                        <>
                            Have an account? <button onClick={handleChange}>Login</button>
                        </>)}
                     
                </span>
            </div>
        </div> 
    </div>
                
  )
}

export default Authentication