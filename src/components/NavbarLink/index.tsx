import React from 'react'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import { IconProps } from '../Icons/types'
import Navbar from '../Navbar/index';
import theme from '../../styles/theme';

const StyledLink: any = styled(Link)`
  transition: all 100ms ease-in-out;
  position: relative;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  text-align: center;
  font-weight: bold;
  font-size: 92.5%;
  text-decoration: none;
  padding: 0.45rem 0.9rem;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  /* -webkit-tap-highlight-color: transparent; */
  text-decoration: none;
}

  @media (max-width: 1100px) {
    width: 2ch;
    padding: 0.45rem 1.5rem;
  }

  @media (max-width: 700px) {
    padding: 0.35rem 1.5rem;
    margin: 0.3rem 0;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Caption = styled.span`
  font-size: 0.95rem;
  text-transform: uppercase;
  display: block;

  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`

class NavbarLink extends React.Component {
  render() {
    const { isactive, to, label, Icon } = this.props
    return (
      <StyledLink style={{ color: isactive == "true" ? theme.colors.greyLight : theme.colors.smoke }} isactive={isactive} to={to}>
        <InnerWrapper>
          {Icon({ isFilled: isactive })}
          <Caption>{label}</Caption>
        </InnerWrapper>
      </StyledLink>
    )
  }
}

export default NavbarLink
