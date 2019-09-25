import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'
import { WorkHero, Layout, Wrapper } from '../../components'

import {
 CenteredImage,
 StyleImg,
 WorkList,
 WorkItem,
 Content,
  StyledLink
} from '../../components/WorkStyles'


type WorkProps = {
  data: {
    projects: {
      edges: {
        node: {
          title: string
          slug: string
          cover: object
        }
      }[]
    }
  }
}


const renderWork = data => {
  return data.map((item, idx) => {
    // const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    // const trans = (x, y, s) => `perspective(9000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    // const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 50, tension: 350, friction: 40 } }))
    return (
          <StyledLink key={item.node.slug} to={`/work/${item.node.slug}`}>
            {/* <animated.div
              class="card"
              onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }} 
            > */}
              <CenteredImage>
                <StyleImg fluid={item.node.cover.childImageSharp.fluid} />
              </CenteredImage>
        {/* </animated.div> */}
              <Content>
                <h4>{item.node.title.toUpperCase()}</h4>
              </Content>  
            
          </StyledLink> 
    )
  })
}

const Work: React.FunctionComponent<WorkProps> = ({ data: { projects } }) => {
  return (
    <Layout customSEO={false}>
    <WorkHero>
     <Wrapper>
      <h1>Work</h1>
      <WorkList>{renderWork(projects.edges)}</WorkList>
     </Wrapper>
    </WorkHero>
   </Layout>
  )
}

export default Work

export const pageQuery = graphql`
  query WorkQuery {
    projects: allProjectsYaml {
      edges {
        node {
          title
          slug
          cover {
            childImageSharp {
              fluid(quality: 95, maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`