import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { HeroText, Hero, Layout, Wrapper } from '../../components'

class Index extends Component {
  render() {
    const {
      data: { contactpage },
    } = this.props
    return (
      <Layout>
        <Hero>
          <Wrapper>
            <HeroText dangerouslySetInnerHTML={{ __html: contactpage.html }} />
          </Wrapper>
        </Hero>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query ContactPage {
    contactpage: markdownRemark(frontmatter: { path: { eq: "contact" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
