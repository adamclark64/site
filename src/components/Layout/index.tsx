import { window } from 'browser-monads';
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { Global } from '@emotion/core'
// import { ThemeProvider } from 'emotion-theming'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import '@reach/skip-nav/styles.css'
import globalStyle from './globalStyles'
import SEO from '../SEO'
import theme from '../../../config/theme'
import Header from '../Header'

type Props = {
  children: any,
  customSEO: boolean
}

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* ::selection {
    color: white;
    background-color: ${theme.colors.black};
  } */
  html {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    
    h1, h2, h3, h4, h5, h6 {
      font-weight: ${theme.fontWeights.bold};
    }
    
    h1 {
      font-size: ${theme.fontSizes[5]};
    }
    h2 {
      font-size: ${theme.fontSizes[4]};
    }
    h3 {
      font-size: ${theme.fontSizes[3]};
    }
    h4 {
      font-size: ${theme.fontSizes[2]};
    }
    h5 {
      font-size: ${theme.fontSizes[1]};
    }
    h6 {
      font-size: ${theme.fontSizes[0]};
    }
    
    @media (max-width: 600px) {
      font-size: 16px;
      
      h1 {
        font-size: ${theme.fontSizes[4]};
      }
      h2 {
        font-size: ${theme.fontSizes[3]};
      }
      h3 {
        font-size: ${theme.fontSizes[2]};
      }
      h4 {
        font-size: ${theme.fontSizes[1]};
      }
      h5 {
        font-size: ${theme.fontSizes[0]};
      }
      h6 {
        font-size: ${theme.fontSizes[0]};
      }
    }
  }
  body {
    border: 0;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    background: white;
    font-size: 18px;
    color: ${theme.colors.greyLight} !important;
    background-color: ${theme.colors.black};
  }
  a {
    transition: all 0.25s ease-in !important;
    /* color: black; */
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${theme.colors.greyLight} !important;
    }
  }
`


class Layout extends Component<Props> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header pathname={window.location.pathname} />
          <SEO />
          {this.props.children}
        </>
      </ThemeProvider>
    )
  }
}

export default Layout