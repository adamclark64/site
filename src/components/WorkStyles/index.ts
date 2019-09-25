import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Wrapper } from '../../components'

const StyledLink: any = styled(Link)`
  transition: color 0.5s ease-in;
  font-size: 2.369rem;
  color: ${props => props.theme.colors.smoke};
  font-style: normal;
  border: 1px solid ${props => props.theme.colors.greyLight};
  width: 350px;
  height:100%;
  overflow: hidden;
  margin: 1.5rem;
  &:hover {
    color: ${ props => props.theme.colors.greyLight}
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.777rem;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`

const Content = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:1rem;

  * {
    margin: 0
  }
`

const WorkList = styled.ul`
  overflow: visible;
  margin: 0;
  transition: all 0.25s ease-out;
  margin-bottom:1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const WorkItem = styled.li`
  margin-bottom:0;
  width: 350px;
  height:100%;
  list-style: none;
`

const StyleImg = styled(Img)`
  transition: all 0.5s ease-in;
  position: relative;
  float: left;
  width:  100%;
  height: 250px;
  background-position: 50% 50%;
  background-repeat:   no-repeat;
  background-size:     cover;
`

const CenteredImage = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
`

const IndexWrapper = Wrapper.withComponent('main')


export {
 IndexWrapper,
 CenteredImage,
 StyleImg,
 WorkList,
 WorkItem,
 Content,
 StyledLink
}