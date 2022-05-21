import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  background-color: teal;
  font-size:16px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:bold;
  color:white;`

const Announcement = () => {
  return (
<>
<Container>
    Best Deals are Up on the way</Container></>
  )
}

export default Announcement