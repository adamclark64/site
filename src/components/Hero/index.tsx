import styled from 'styled-components'

export const Hero =  styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`


export const WorkHero = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  /* padding: 1.5rem; */
  display: flex;
  justify-content: center;
  margin-bottom:1.5rem;
`

export default {
  Hero,
  WorkHero
}