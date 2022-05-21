import styled from 'styled-components'
import { CategoriesList } from '../data'
import CategoryItem from './CategoryItem'

const Container =styled.div`
     display:flex;
     padding:30px;
     margin:5px;
`

const Categories = () => {
  return (
    <Container>
        {CategoriesList.map((item,i)=>{
            return <CategoryItem key={i} categories={item}/>
        })}
    </Container>
  )
}

export default Categories