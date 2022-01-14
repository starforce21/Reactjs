import React, { useRef } from 'react';

function FormUncontrol(){
    const userNameRef = useRef(0)  //   { current: null }
    const passwordRef = useRef(0)
    const emailRef = useRef(0)

    const handleSubmit = event => {
        event.preventDefault()

        let formData = {
            username: userNameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value
        }

        console.log(userNameRef)

        console.log(formData)
    }
       
        return (  
            <form onSubmit={handleSubmit} className='ucf'>

                <label htmlFor="username1">username:</label>
                <input 
                    id="username1"
                    ref={userNameRef}   //  { current: inputelement }
                />

                <label htmlFor="password1">password:</label>
                <input 
                    id="password1"
                    ref={passwordRef} 
                    type="password"
                />

                <label htmlFor="email1">email:</label>
                <input 
                    id="email1"
                    ref={emailRef}
                    type="email"
                />

                <button>Submit</button>

            </form>
        );
    }
}
 
export default FormUncontrol;



// ref={element => email = element}  
