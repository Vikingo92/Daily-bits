import styled from 'styled-components';

export const BtnComprobar = styled.button`
    background-color:#6B47DC;
    color: white;
    border: none;
    width: 400px;
    height: 50px;
    border-radius: 13px;
    algn-items: center;
    justify-content: center;
    margin-top:3rem;
    
    text-transform:uppercase;

    &:hover {
        background-color: #D4CAF3;
    }
`

export const ImgBoy = styled.img`
    width: 100px;
    display:flex;
    
`
export const Titulo = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 30px;
    width: 400px;

    h2 {

    }
    
`
export const QuestionStyle = styled.p`
    font-size: 1.5rem;
`

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`

export const ButtonStyle = styled.button`

    text-align:left;
    aling-items:center;
    justyfy-content:center;
    background-color:#232E35;
    color: white;
    font-size:1rem;
    border: 2px solid white;
    border-radius: 5px;
    padding: 1rem;
    margin: 8px;
    width: 400px;

    &:hover {
        transition: all 200ms ease-in;
    }
`

export const CorrectStyle = styled.span`
    color: #2CB67D;
    font-size: 1.5rem;
    

`

export const IncorrectStyle = styled.span`
    font-size: 1.5rem;
    color: #EF4565;
       
`
export const TextStyle = styled.p`
    font-size: 1.5rem;
    border: 1px solid white;
    background-color:#232E35;
    color: white;
    font-size:1rem;
    border-radius: 5px;
    padding: 0.7rem;
    margin: 8px;
    width: 400px;
    justify-content:space-between;
    display:flex;

    &:hover {
        border-color:#2CB67D;
    }
`
export const RestartGame = styled.button`
    background-color:#6B47DC;
    color: white;
    border: none;
    width: 400px;
    height: 50px;
    border-radius: 13px;
    algn-items: center;
    justify-content: center;
    margin-top: 10px;
    text-transform:uppercase;

    &:hover {
        background-color: #D4CAF3;
    }
`

export const NumStyle = styled.span`
    color:white;
    font-size: 1.5rem;

`
export const MenuIcons = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    text-align: center;
    background-color:#232E35;
    width: 400px;
    height:90px;
    margin-top:10rem;
    border-radius:5px;

    ul {
        display:inline-flex;
        align-items:center;
        justify-content:center;
        padding:0 90px;
        
        li {
            margin:5px 2rem;
            display:flex;
            list-style:none;
            cursor:pointer;
            flex-direction:column;
           

            &:hover {
                color:#2CB67D;

            }
        }
    }

`

export const ChartsStyle = styled.div`
    text-align:left;
    align-items:left;
    justify-content:left;
    margin-right:210px;
`

export const SesionStyle = styled.p`
    font-size: 1.5rem;
    color: #EF4565;
    margin-top:1rem;
    cursor:pointer;
`

export const HeaderStyle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-bottom:5rem;

`
export const LiveStyle = styled.img`
    display:flex;
    align-items:right;
    justify-contet:right;
`
export const CircleStyle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 0 100px;
    

`