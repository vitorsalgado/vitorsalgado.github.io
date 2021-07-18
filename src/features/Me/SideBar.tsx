import '@app/base.scss'
import * as React from 'react'
import styled from 'styled-components'
import { MediaQueries } from '@app/app-vars'

const Wrapper = styled.div`
  grid-area: sidebar;
  height: 100%;
  min-height: 100vh;
  padding: 20px 20px;
  width: 350px;
  background: var(--color-primary);
  color: #f9f9fb;
  transition: box-shadow 0.1s ease-in-out;
  box-shadow: var(--box-shadow);
  border-right: 4px solid #573eb7;
  position: relative;
  display: inline-block;
  overflow: auto;

  @media (${MediaQueries.maxWidth}) {
    width: 100%;
    height: auto;
    border-right: 0 none;
  }
`

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

export default function SideBar(props: Props): JSX.Element {
  return <Wrapper>{props.children}</Wrapper>
}
