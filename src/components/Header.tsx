import React, { Component } from 'react'
import Navbar from './Navbar'

const Header: React.FunctionComponent<{
  pathname: string
}> = ({ pathname }) => (
  <Navbar pathname={pathname} />
)

export default Header