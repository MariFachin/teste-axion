import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image:url("../../assets/computador.PNG");
  background-color: #F9F9F9;
  img{
    zindex:1;
  }
  `;

export const Form = styled.form`
  background-color: #FFFFFF;
  box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.1);
  width: 430px;
  height: 746px;
  padding:30px 50px 30px 50px;
  display: flex;
  flex-direction: column;
  zindex:90;
 
  h2{
    color: #4A4A4A;
    font-family: Righteous;
    font-size: 36px;
    margin: 0px 0px 40px 0px;
    letter-spacing: 14px;
    line-height: 43px;
    font-weight: bold;
    text-align: left;
  }
  p {
    color: #4A4A4A;
    font-family: OpenSans;
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 17px;
    text-align: left;
    margin: 30px 0px 30px 0px;
  }
  
  label{
    color: #4A4A4A;
    font-family: OpenSans;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 19px;
    font-weight: bold;
    margin: 0px 0px 10px 0px;
    text-align: left;
  }
  input {
    border: 1px solid #4A4A4A;
    width: 100%;
    height: 55px;
    margin-bottom: 15px;
    padding: 0 20px;
    font-size: 15px;
    &::placeholder {
      color: #9B9B9B;
    }
  }

  button {
    background-image: linear-gradient(134.72deg, #AE23A9 0%, #DC4E1B 100%);
    height: 55px;
    font-size: 16px;
    width: 100%;
    border: none;
    color: #FFFFFF;
    letter-spacing: 1px;
    line-height: 19px;
    font-weight: bold;
    margin: 20px 0px;
  }
  a {
    border: 1px solid #9B9B9B;
    width: 100%;
    text-align: center;
    padding:15px;
    font-size: 16;
    font-weight: bold;
    color: #4A4A4A;
    text-decoration: none;
  }
  .error{
    border: 1px solid red;
    width: 100%;
    text-align: center;
    padding:10px;
    font-size: 14;
    font-weight: bold;
    color: red;
  }

`;
