import styled from 'styled-components'
import { MediaQueries } from '@app/app-vars'

const SubTitle = styled.p`
  transform: translate(0px, 0px);
  opacity: 1;
  font-size: 20px;
  font-weight: 300;

  @media (${MediaQueries.maxWidth}) {
    text-align: center;
  }
`

export default SubTitle
