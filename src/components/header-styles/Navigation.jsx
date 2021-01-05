import styled from 'styled-components'

const Navigation = styled.header`
  top: 0;
  float: right;
  margin: auto;
  padding: 2rem 1rem;
  text-align: right;

  @media only screen and (max-width: 700px) {
    height: auto;
    padding: 1rem 2rem;
    text-align: center;
  }
`

export default Navigation