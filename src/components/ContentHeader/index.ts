import styled from 'styled-components'
import { MediaQueries } from '@app/app-vars'

const ContentHeader = styled.header`
  display: flex;
  flex-direction: column;

  @media (${MediaQueries.maxWidth}) {
    align-items: center;
    margin-top: 20px;
  }
`

export default ContentHeader
