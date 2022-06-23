import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    align-items:center;
    justify-content: center;

}

body {
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-weight: 100;
    color: white;
    background-color: black;
    align-items: center;
    justify-content: center;
    text-align: left;
   

}

h3, h4 {
    font-size: 1rem;
    word-wrap:wrap;
}

h4 {
    
    color: #2CB67D;
}

`
