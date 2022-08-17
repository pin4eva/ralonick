import React from "react";
import { useState } from "react";
i

function Login({ name }) {
    const [message, setMessage] = useState("hello")
    //to 
    // function handleClick(){
    //     setMessage("unknown")
    // }

    function handleChange(e) {
        setMessage(e.target.value)
    }


    return (
        <div>
            <section>
                {/* <label>Name</label>
        <div>
        <h1>
            {name}
        </h1>
        <h1>
         {message}
        </h1>
        </div>
           
{/* to change to message prop */}
                {/* <NavLink to="/welcome" className={({isActive})=>(isActive ? 'link active':'link')}><li><button >change</button></li></NavLink> */}
                {/* to add to  */}
                {/* onMouseOver={handleClick}, onClick={handleClick} */}

                {/* </div>
        <input></input> */}
                <div className="login">
                    <form>
                        <span>Welcome</span>
                        <br />
                        <label>Username</label>
                        <br />
                        <input type="text" placeholder="Name" onChange={handleChange} />
                        <br />
                        <label>Email</label>
                        <br />
                        <input type="email" placeholder="Email address" />
                        <br />
                        <label>Password</label>
                        <br />
                        <input type="password" placeholder="Password" />
                        <br />
                        <button>Login</button>
                        <br />
                        <label >Don't have an account?</label>
                        <Link to="/signup" className="loginbutton">SignUp</Link>

                    </form>
                </div>
            </section>
        </div>
    )
}
export default Login