import styled from "styled-components";

export const Container = styled.div`

display: flex;
justify-content: center;
alingn-items: center;
height: 100vh;
min-width: 100vw;
background-color: #383838;

`
export const Form= styled.form`
display: flex;
padding: 3px;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #201d1d;
border-radius: 5px;
width: 100%;
max-width: 450px;
gap: 30px 0px;

h1{
  color: white;
  font-size:20px;
  font-weigth: light;
}

p{
  color: white;
  font-size:16px;
  font-weigth: bold;
}

a{
  color: white;
  font-size: 14px;
}

`