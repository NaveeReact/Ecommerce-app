import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info =styled.div`
   opacity:0;
   position:absolute;
   top:0;   
   bottom:0;
   display:flex;
   align-items: center;
   justify-content: center;
   transition:all 1.5s ease-out;
   cursor:pointer;
  
`
const Container =styled.div`
     height:70vh;
     flex:1;
    min-width:380px;
     margin:5px;
     display: flex;
     justify-content: center;
     align-items: center;
     position:relative;
     &:hover ${Info}{
         opacity:1;
     }
`
const ImageContainer =styled.img`
     height:75%;
     width:100%;
     object-fit:cover;
`
const Icon =styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:bisque;
    opacity:80%;
    margin:10px;
    transition: all 0.5s ease;
    &:hover{
        background-color:antiquewhite;
        transform:scale(1.1)
    }
` 
// const Circle= styled.div`
//       height:200px;
//       width:200px;
//       border-radius:50%;
//       background-color:whitesmoke;
//       position:absolute;
//       display:flex;
//       justify-content: center;
//       align-items: center;
//       opacity:25%;
// `
const Productitem = ({item}) => {
  return (
   <Container>
       {/* <Circle></Circle> */}
       <ImageContainer src={item.thumbnail}></ImageContainer>
       <Info>
           <Icon>
           <ShoppingCartOutlined/>
         </Icon>
          <Icon>
              <SearchOutlined/>
        </Icon> 
        <Icon>
             <FavoriteBorderOutlined/>
        </Icon> 
       </Info>
   </Container>
  )
}

export default Productitem