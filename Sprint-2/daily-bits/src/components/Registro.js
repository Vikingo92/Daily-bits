import React, { useState } from 'react'

import { Stack, Container, Form, Button } from 'react-bootstrap'
import { ButtonStyle, ContainerStyle, Img } from './styles/Form.Style';
import {FaGoogle} from 'react-icons/fa';



import app from './firebase/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export const Register = () => {

    const [usuarioRegistrado, setUsuarioRegistrado] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        // Captura de los campos.
        const email = e.target.formBasicEmail.value;
        const password = e.target.formBasicPassword.value;
        console.log(email, password);


        if (usuarioRegistrado) {
            // Crear una cuenta sino existe.
            const newUser = await createUserWithEmailAndPassword(auth, email, password);
            console.log(newUser);

        } else {
            // Si ya existe, Iniciar Sesion.
            signInWithEmailAndPassword(auth, email, password);

            localStorage.setItem('Sesion', JSON.stringify({ email, password }));

        }

    }

    return (
        <ContainerStyle>
            <Container className="container-fluid" style={{ align: 'center' }}>
                <Stack gap={3}>
                    <Img src='./images/Logo.png'/>
                    <h1>  {usuarioRegistrado ? "Registrate" : "Iniciar Sesión"} </h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3 center" controlId="formBasicEmail">
                            <Form.Label >Correo electrónico</Form.Label>
                            <Form.Control style={{ width: '300px' }} type="email" placeholder="Ingrese su correo electrónico" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control style={{ width: '300px' }} type="password" placeholder="Ingrese su contraseña" />
                        </Form.Group>

                        <Button type="submit" className="bg-dark" style={{ width: '300px' }}>
                            {usuarioRegistrado ? "Registrate" : "Inicia Sesion"}
                        </Button>

                    </Form>
                    <ButtonStyle className="boton-1" style={{ width: '300px' }} type="submit" onClick={() => signInWithRedirect(auth, googleProvider)}>
                        <FaGoogle/> Continuar con Google
                    </ButtonStyle>

                    <Button className="boton-2 bg-dark" style={{ width: '300px' }} onClick={() => setUsuarioRegistrado(!usuarioRegistrado)} type="submit">
                        {usuarioRegistrado ? "¿Ya tiene una cuenta? Inicia Sesion" : "¿Aún no tienes cuenta? Incribirse."}
                    </Button>
                    <h4>¿Se te olvidó tu contraseña?</h4>
                </Stack>
            </Container>
        </ContainerStyle>
    )
}
