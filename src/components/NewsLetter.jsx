import { SendOutlined } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
     height:50vh;
     width:100vw;
     background-color:aliceblue;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction:column;
`
const Title = styled.h1`
   font-size:70px;
    margin-bottom:20px;
`
const Decription = styled.div`
      font-size:24px;
      font-weight:30px;
      margin-bottom:30px;
`
const InputContainer = styled.div`
      height:50px;
      width:50%;
      background:whitesmoke;
      display:flex;
      align-items: center;
`
const Input = styled.input`
    border:none;
    padding:10px;
    flex:1;
    margin:5px;
    &:active{
        border:none;
    }
`
const Button = styled.button`
     color:white;
     padding:10px;
     background-color:teal;
     border:0.5px solid grey;
     cursor: pointer;
     border-radius:25px;
`
const NewsLetter = () => {
  return (
   <Container>
       <Title>NewsLetter</Title>
       <Decription>Get Fashion updates on ur fingertips</Decription>
       <InputContainer>
       <Input type='email' placeholder='Enter Email'></Input>
       <Button><SendOutlined></SendOutlined></Button>
       </InputContainer>
   </Container>
  )
}

export default NewsLetter