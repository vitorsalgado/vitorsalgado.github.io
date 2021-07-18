import * as React from 'react'
import styled from 'styled-components'
import { MediaQueries } from '@app/app-vars'

const Wrapper = styled.div`
  position: relative;
  display: grid;
  width: 100vw;
  height: 100%;
  column-gap: 20px;
  grid-template-columns: 1fr 3fr;
  justify-items: start;
  grid-template-areas: 'sidebar content';

  @media (${MediaQueries.maxWidth}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'sidebar'
      'content';
  }
`

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

export function Container(props: Props): JSX.Element {
  return <Wrapper>{props.children}</Wrapper>
}
