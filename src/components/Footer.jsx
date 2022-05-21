import { Email, Facebook, Instagram, LinkedIn, Map, Phone, Pinterest } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  padding:20px;
`;
const Logo =styled.h1`
    color:rgb(163, 33, 33);
 `

 const Desc =styled.p`
     font-size:16px;
     font-weight:bold;
 `

 const SocialContainer=styled.div`
     display: flex;
 `
 const SocialIcon=styled.div`
    width:40px;
    height: 40px;
    border-radius : 50%;
    color:white;
    background-color: ${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
 `
const Center = styled.div`
  flex: 1;
  padding:20px;
`;

const Title =styled.h3`   
`
const List =styled.ul`
    list-style:none;
    margin-right:0;
    padding:0;
    display: flex;
    flex-wrap: wrap;
`
const ListItem =styled.li`
   width:50%; 
   margin-bottom: 10px;
   cursor: pointer;
`
const Right = styled.div`
  flex: 1;
  padding:20px;
`;

const ContactItem =styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
 
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shopify</Logo>
        <Desc>Follow us for more updates and offers at shopify. Hurray!!</Desc>
        <SocialContainer>
          <SocialIcon color='red'>
              <Facebook/>
          </SocialIcon >
          <SocialIcon color='blue'>
              <Instagram/>
          </SocialIcon>
          <SocialIcon color='green'>
              <LinkedIn/>
          </SocialIcon>
          <SocialIcon color='rgb(209, 209, 106)'>
              <Pinterest/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
          <Title>useful links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Mens Fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>Orders</ListItem>
              <ListItem>Whishlist</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Womens Fashion</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Settings</ListItem>
              <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem><Map style={{marginRight:'10px'}}/> No:116 Brandfactory Bengaluru</ContactItem>
          <ContactItem><Phone style={{marginRight:'10px'}}/>+91 7878787898</ContactItem>
          <ContactItem><Email style={{marginRight:'10px'}}/>Shopify@gmail.com</ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
