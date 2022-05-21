import { VerifiedUser } from "@material-ui/icons";
import styled from "styled-components";
const Container = styled.div`
height: 100vh;
width: 100vw;
background-color:aliceblue;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
  width:40%;
  background-color:white;
  
`;

const Title = styled.h1`
 font-weight: 300;
 font-size: 24px;
 margin-left:15px;
 display: flex;
  align-items: flex-start;
`;
const Form = styled.form`
    display: flex;
    flex-wrap:wrap;
`;
const Input = styled.input`
width:40%;
margin:10px 15px ;
padding:10px;

`;
const Agreement = styled.span`
   font-size:15px;
   margin:10px 15px ;
   
`;
const Button = styled.button`
font-size:15px;
font-weight:300;
margin:10px 15px ;
padding:10px;
width:40%;
border:none;
font-weight:bold;
background-color:whitesmoke;
border:1px solid teal;
cursor: pointer;
&:hover{
    background-color:teal;
    color:white;
    font-weight: bold;
}
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account <VerifiedUser/></Title>
            <Form>
                <Input placeholder='First Name'/>
                <Input placeholder='Last Name'/>
                <Input placeholder='User Name'/>
                <Input placeholder='Email'/>
                <Input placeholder='Password'/>
                <Input placeholder='Confirm Password'/>
                <Agreement>By creating an account ,I concent to the processing of my personal data in accordance with the <b>Privacy Policy</b></Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register