import React from 'react'
import styled from 'styled-components'
import { ProductsData } from '../data'
import ProductItem from './ProductItem'


const Container =styled.div`
       display: flex;
       padding: 10px;
       flex-wrap:wrap;
`

const Products = () => {
  return (
      <Container>
          {ProductsData.map((item,i)=>{
              return <ProductItem key ={i} item={item}></ProductItem>
          })}
      </Container>
  )
}

export default Products