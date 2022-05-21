import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { slideItems } from '../data'

const Container=styled.div`
height: 100vh;
width:100vw;
display:flex;
overflow:hidden;
position:relative;`


const Arrow =styled.div`
    display: flex;
    height:20px;
    width:20px;
    padding:20px;
    justify-content:center;
    align-items:center;
    background-color:bisque;
    border-radius:50px;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;  
    left:${({direction})=> direction === 'left' && '10px'};
    right:${({direction})=> direction === 'right' && '10px'};
    opacity:0.5;
    cursor:pointer;
    z-index:2;
`
const Wrapper = styled.div`
     height: 100%; 
     display: flex;
     transition:all 1s ease;
     transform:translateX(${({leftrightIndex})=> leftrightIndex * -100}vw);
`
const Slide = styled.div`
      height:100vh;
      width: 100vw;
      display: flex;
      align-items: center;
`

const ImageContainer =styled.div`
      flex:1;
      height:100%;`

const InfoContainer =styled.div`
    flex:1;
    padding:50px;
`
const Image=styled.img`
    width:100%;
    height:100%;
    border-radius:20px;
    padding:10px;
    object-fit:cover;
`

const Title = styled.h1`
     margin:30px 0px;
     font-size: 50px;`

const Description =styled.p`
margin:30px 0px;
font-size: 30px;
letter-spacing:3px;
`

const Button =styled.button`
margin:20px 0px;
padding:10px;
background-color:transparent;
font-size:20px;
font-weight:bold;
cursor: pointer;
`

const Slider = () => {
     const[slideIndex,setSlideIndex]= useState(0)

  const HandleClick =(direction)=>{
    if(direction ==='left'){
         setSlideIndex(slideIndex > 0 ? slideIndex -1 : slideItems.length-1 )
    }else{
      setSlideIndex(slideIndex < slideItems.length-1  ? slideIndex +1 : 0 )
    }
  }

  return (
    <Container>
        <Arrow direction='left' onClick={()=>{HandleClick('left')}}>
          <ArrowLeftOutlined></ArrowLeftOutlined>
        </Arrow>
        <Wrapper leftrightIndex={slideIndex}>
          {slideItems.map((item,i)=>{
            return(<Slide key={i}>
              <ImageContainer>
                <Image src={item.img}></Image>
              </ImageContainer>
              <InfoContainer>
                 <Title>{item.title}</Title>
                 <Description>{item.desc}</Description>
                 <Button>Show Now</Button>
              </InfoContainer>
            </Slide>)
          })}
          
        </Wrapper>
             <Arrow direction='right' onClick={()=>{HandleClick('right')}}>
         <ArrowRightOutlined></ArrowRightOutlined>
        </Arrow>
    </Container>
  )
}

export default Slider