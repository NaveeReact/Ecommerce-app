import styled from 'styled-components'

const Container =styled.div`
  height: 70vh;
  margin :5px;
  flex:1;
  position:relative;
`
const ImageContainer =styled.img`
   width:100%;
   height:100%;
   border-radius:25px;
   object-fit:cover;
`
const Info =styled.div`
     height: 100%;
     width: 100%;
     position: absolute;
     top:0;
     bottom:0;
     margin:auto;
     display: flex;
     flex-direction:column;
     justify-content:center;
     align-items: center;
`
const InfoTitle =styled.h1`
    color:antiquewhite;
    margin:10px;
    font-size:55px;
`
const Button =styled.button`
    border:none;
    background-color:antiquewhite;
    font-size:25px;
    cursor: pointer;
    border-radius:5px;
`
const CategoryItem = ({categories}) => {
  return (
    <Container>
        <ImageContainer src={categories.img}></ImageContainer>
        <Info>
        <InfoTitle>{categories.title}</InfoTitle>
        <Button>Show Me</Button>
        </Info>
        
    </Container>
  )
}

export default CategoryItem