import React, { useState } from 'react';

import {
    BtnComprobar, ButtonStyle, CorrectStyle, IncorrectStyle,
    ImgBoy, Options, Titulo, TextStyle, NumStyle, MenuIcons, ChartsStyle,
    SesionStyle, HeaderStyle, QuestionStyle, LiveStyle
} from './styles/Home.Style';


import preguntas from './data/questions';
// import { Perfil } from './Perfil';

import { BsPerson } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineLineChart } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';



import app from './firebase/firebaseConfig';
import { getAuth, signOut } from 'firebase/auth';
import { Container } from 'react-bootstrap';

const auth = getAuth(app);


export const Home = () => {
    

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0);

    const seleccion = (isCorrect, e) => {
        console.log(isCorrect)

        if (isCorrect) {
            setScore(score + 1);

        }

        if (currentQuestion + 1 < preguntas.length) {
            setCurrentQuestion(currentQuestion + 1)

        } else {
            setResult(true)
        }

        if (isCorrect === true) {
            e.target.classList.add('correct')
        }
        if (isCorrect === false) {
            e.target.classList.add('inCorrect')
        }
    }

    const empezar = () => {
        setScore(0);
        setCurrentQuestion(0);
        setResult(false);
    }

    


    return (
        <Container>
            <SesionStyle onClick={() => signOut(auth)}>Cerrar Sesión</SesionStyle>

            {result ?
                <Options>
                    <ChartsStyle>
                        <h2>Estadísticas</h2>
                        <h3>Los ultimos 7 dias
                            <IoIosArrowDown size={'2rem'} />
                        </h3>
                    </ChartsStyle>

                    <TextStyle>Tiempo de estudio (horas) <NumStyle> 0:98</NumStyle></TextStyle>
                    <TextStyle>Respuestas correctas <CorrectStyle> {score}</CorrectStyle></TextStyle>
                    <TextStyle>Respuestas incorrectas <IncorrectStyle> {(preguntas.length - score)} </IncorrectStyle> </TextStyle>
                    <TextStyle>Total de preguntas <NumStyle> {preguntas.length}  </NumStyle></TextStyle>
                    <TextStyle>Score total <NumStyle>({(score / preguntas.length) * 100}%)</NumStyle> </TextStyle>
                    <MenuIcons>
                        <ul>
                            <li onClick={() => empezar()}>
                                <AiOutlineHome size={'2rem'} />
                                Home
                            </li>
                            <li>
                                <AiOutlineLineChart size={'2rem'} />
                                Estadísticas
                            </li>
                            <li>
                                <BsPerson size={'2rem'} />
                                Perfil
                            </li>
                        </ul>
                    </MenuIcons>
                </Options>

                :

                <div>
                    <HeaderStyle>
                        {/* <h2>Score: {score} </h2> */}
                        <LiveStyle src='./images/header.png' alt='' />
                        {/* <h2> {currentQuestion + 1} - {preguntas.length} </h2> */}
                        <Titulo>
                            <ImgBoy src='./images/Boy.png' alt='' />
                            <QuestionStyle>
                                {preguntas[currentQuestion].text}
                            </QuestionStyle>
                        </Titulo>
                    </HeaderStyle>
                    <Options>
                        {preguntas[currentQuestion].options.map(option => {
                            return (
                                <ButtonStyle onClick={(e) => seleccion(option.isCorrect, e)} key={option.id}>{option.text}
                                </ButtonStyle>


                            )

                        })}

                        <BtnComprobar>Comprobar</BtnComprobar>
                    </Options>
                </div>
            }


        </Container>


    )
}
