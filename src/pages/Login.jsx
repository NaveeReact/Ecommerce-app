import { VerifiedUser } from "@material-ui/icons";
import styled from "styled-components";
const Container = styled.div`
height: 100vh;
width: 100vw;
background-color:antiquewhite;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
  width:25%;
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
    flex-direction: column;
  
`;
const Input = styled.input`
flex:1;
min-width:40%;
margin:10px 15px ;
padding:10px;

`;
const Link = styled.span`
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


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In <VerifiedUser/></Title>
            <Form>
              
                <Input placeholder='User Name'/>
                <Input placeholder='Password'/>
         
                 <Link>Forgot Password</Link>
                <Button>Login</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login