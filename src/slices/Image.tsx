import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Content = styled.div`
  padding: 1.5rem 0;
`

const Image = ({ input }) => (
  <Content>
    <Img fluid={input.primary.image.localFile.childImageSharp.fluid} />
  </Content>
)

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
