import React from 'react'
import { graphql, Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'
import { transparentize, readableColor } from 'polished'
import styled from 'styled-components'
import { config, useSpring, animated } from 'react-spring'
import Layout from '../components/Layout'
import { Box, AnimatedBox, Button } from '../elements'
import SEO from '../components/SEO'

const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
  display:flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled(Box)`
  background-color: ${props => transparentize(0.9, props.bg)};

  /* .gatsby-image-wrapper:not(:last-child) { */
  .gatsby-image-wrapper {
    align-self: center;
    display: flex;
    flex-direction: column;
    width:80%;
    margin-bottom: ${props => props.theme.space[10]};

    @media (max-width: ${props => props.theme.breakpoints.m}) {
      width: 100%;
      margin-bottom: ${props => props.theme.space[8]};
    }
  }
`

const Category = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  font-size: ${props => props.theme.fontSizes[1]};
  text-transform: uppercase;
`

const Description = styled(animated.div)`
  max-width: 960px;
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
`

const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
`

const BackLink = styled(Link)`
  color: ${props => props.theme.colors.smoke};
  &:hover {
    color: ${props => props.theme.colors.greyLight};
  }
`

const StyledGif = styled.img`
  width: 80%;
  margin-bottom: ${props => props.theme.space[10]};
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100%;
    margin-bottom: ${props => props.theme.space[8]};
  }
`

type PageProps = {
  data: {
    project: {
      title_detail: string
      title: string
      color: string
      category: string
      desc: string
      slug: string
      parent: {
        modifiedTime: string
        birthTime: string
      }
      cover: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
    images: {
      edges: {
        node: {
          name: string
          publicURL: string
          extension: string
          childImageSharp: {
            fluid: {
              aspectRatio: number
              src: string
              srcSet: string
              sizes: string
              base64: string
              tracedSVG: string
              srcWebp: string
              srcSetWebp: string
            }
          }
        }
      }[]
    }
  }
}

const renderGif = gif => {
  return (
    <>
      <StyledGif
        alt={gif.node.name}
        key={gif.node.publicURL}
        src={gif.node.publicURL}
      />
    </>
  )
}

const Project: React.FunctionComponent<PageProps> = ({ data: { project, images } }) => {
  const fadeIn = useSpring({
    config: config.slow,
    from: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })

  const titleAnimation = useSpring({ config: config.slow, delay: 300, from: { opacity: 1 }, to: { opacity: 1 } })
  const descAnimation = useSpring({ config: config.slow, delay: 600, from: { opacity: 1 }, to: { opacity: 1 } })
  const imagesAnimation = useSpring({ config: config.slow, delay: 800, from: { opacity: 1 }, to: { opacity: 1 } })

  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0)
  }

  return (
    <Layout color={project.color}>
      <SEO
        pathname={project.slug}
        title={`${project.title_detail} | Adam Clark`}
        desc={project.desc}
        node={project.parent}
        // banner={project.cover.childImageSharp.resize.src}
        individual={true}
      />
      <PBox py={10} px={[6, 6, 8, 10]}>
        <BackLink to="/work">← Back</BackLink>
        <Category style={fadeIn}>{project.category}</Category>
        <animated.h1 style={fadeIn}>{project.title}</animated.h1>
        <animated.h2 style={fadeIn}>{project.title_detail}</animated.h2>
        <Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: project.desc }} />
        </Description>
      </PBox>
      <Content bg={project.color} py={10}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          {images.edges.map(image => {
            if(image.node.extension === "gif") return renderGif(image);
            return (
              <Img
                alt={image.node.name}
                key={image.node.childImageSharp.fluid.src}
                fluid={image.node.childImageSharp.fluid}
              />
            )
          })}
        </PBox>
      </Content>
      {/* <PBox textalign="center" py={10} px={[6, 6, 8, 10]}>
        <h2>Want to start your own project?</h2>
        <PButton color={project.color} py={4} px={8}>
          Say Hey 👋
        </PButton>
      </PBox> */}
    </Layout>
  )
}

export default Project

export const query = graphql`
  query ProjectTemplate($slug: String!, $images: String!) {
    project: projectsYaml(slug: { eq: $slug }) {
      title
      title_detail
      color
      category
      desc
      slug
      parent {
        ... on File {
          modifiedTime
          birthTime
        }
      }
    }
    images: allFile(filter: { relativePath: { regex: $images } }) {
      edges {
        node {
          name
          extension
          publicURL
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
