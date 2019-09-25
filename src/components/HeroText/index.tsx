import styled from 'styled-components'

export default styled.div`
  font-size: 1.7rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.4rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.25rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;

    a,li {
      list-style: none;
      color: ${props => props.theme.colors.smoke};

      &:hover {
        color: ${props => props.theme.colors.greyLight};
      }
    }
  }
`