import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  border-radius: 20px;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 20px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p``;

const Price = styled.h3`
  font-size: 40px;
  font-weight: 100;
`;

const FilterContainer = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.h3`
  font-weight: 100;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-left: 10px;
  cursor: pointer;
`;

const Select = styled.select`
  margin: 10px;
`;

const Option = styled.option``;

const AddContainer = styled.div`

display: flex;
margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;`;
const AddRemoveContainer = styled.div`
display: flex;
align-items: center;
justify-content:space-between;
`;
const TotalItems = styled.div`
margin: 0px 10px;
width:30px;
height:30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
`;

const Button = styled.button`
padding:10px;
border: 1px solid teal;
background-color:white;
font-weight: 500;;
cursor: pointer;
&:hover{
    background-color:teal;
    color:white;
    font-weight: 700;
}
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="/images/Categories/category1.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Jeans</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            officia ipsum ipsa aut dignissimos voluptatum ab rerum animi, nisi
            ratione?
          </Desc>
          <Price>$90</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="blue" />
              <FilterColor color="red" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <Select>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AddRemoveContainer>
              <Remove />
              <TotalItems>1</TotalItems>
              <Add></Add>
            </AddRemoveContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
