import React from 'react'
import styled from 'styled-components'
import NavbarLink from '../NavbarLink'
import AboutIcon from '../Icons/AboutIcon'
import ProjectsIcon from '../Icons/ProjectsIcon'
import ContactIcon from '../Icons/ContactIcon'
import { IconProps } from '../Icons/types'

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding-left: env(safe-area-inset-left);

  @media (max-width: 1100px) {
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    /* box-shadow: 2px 0 2px ${props => console.log('%c ( ͡° ͜ʖ ͡°)', 'color:tomato;font-size:30px;', props) }; */
    border-top: 1px solid ${props => props.theme.colors.smoke};
    background-color: ${props => props.theme.colors.black};

    @supports (
      (-webkit-backdrop-filter: blur(15px)) or (backdrop-filter: blur(15px))
    ) {
      background-color: ${props => props.theme.colors.black};
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
    }
  }
`

const InnerNavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 40rem;
  max-height: 15rem;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  font-family: 'Montserrat';

  @media (max-width: 1100px) {
    flex-direction: row;
  }
`

const Navbar: React.FunctionComponent<{
  pathname: string
}> = ({ pathname }) => (
  <NavbarWrapper>
    <InnerNavbarWrapper>
      <NavbarLink
        to="/"
        isactive={new RegExp('^/$|^/about').test(pathname).toString()}
        Icon={(props: IconProps) => <AboutIcon {...props} />}
        label="About"
      />
      <NavbarLink
        to="/work"
        isactive={new RegExp('^/work').test(pathname).toString()}
        Icon={(props: IconProps) => <ProjectsIcon {...props} />}
        label="Work"
      />
      <NavbarLink
        to="/contact"
        isactive={new RegExp('^/contact').test(pathname).toString()}
        Icon={(props: IconProps) => <ContactIcon {...props} />}
        label="Contact"
      />
    </InnerNavbarWrapper>
  </NavbarWrapper>
)

export default Navbar
