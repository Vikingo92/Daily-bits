import React, {useState} from 'react'
import { Home } from './Home';
import { Register } from './Registro';

import app from './firebase/firebaseConfig';
import { getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(app);

export const Login = () => {

    const [user, setUser] = useState(null);

     onAuthStateChanged(auth, (inicioSesion) => {

         if (inicioSesion) {
            setUser(inicioSesion);
            
        } else {
            setUser(null);
        }
    });

    return (

        <>
        {user ? <Home/> : <Register/>}
        </>
    )
}
