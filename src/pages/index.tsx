import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { SocialList, HeroText, Hero, Layout, Wrapper } from '../components'
import styled from 'styled-components'

class Index extends Component {
  render() {
    const {
      data: { homepage, social },
    } = this.props
    return (
      <Layout customSEO={false}>
        <Hero>
          <Wrapper>
            <HeroText dangerouslySetInnerHTML={{ __html: homepage.html }} />
            <SocialList>
              {/* {social.edges.map((s, index) => (
                <li data-name={`social-entry-${index}`} key={s.node.primary.label.text}>
                  <a target="foo" href={s.node.primary.link.url}>
                    {s.node.primary.label.text}
                  </a>
                </li>
              ))} */}
            </SocialList>
          </Wrapper>
        </Hero>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query HomePage {
    homepage: markdownRemark(frontmatter: { path: { eq: "home" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
