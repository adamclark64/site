import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 1.5rem auto;
  padding: 2.5rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding: 1.5rem;
  }
`

export default Wrapper
