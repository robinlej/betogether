import { ImSpinner6 } from 'react-icons/im'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const Spin = keyframes`
 0% { transform: rotate(0deg) };
 100% {transform: rotate(360deg)}; 
`
const Spinner = styled(ImSpinner6)`
  color: white;
  font-size:5rem;
  animation: ${Spin} 2s linear infinite;
  place-self:center;
`

const Container = styled.div`
  display:grid;
  width:100vw;
  height: 100vh;
  place-items:center;
`

export const HoldSpinner = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  )
}