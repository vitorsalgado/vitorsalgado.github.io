import React from 'react'
import styled from 'styled-components'
import Css from '@app/base.scss'
import { concatCSS } from '@app/shared/utils/css'

const Wrapper = styled.p`
  font-size: 14px;
  position: absolute;
  bottom: 0;
`

export default function MadeIn(): JSX.Element {
  return (
    <Wrapper>
      Made with <span className={concatCSS('material-icons-outlined', Css.icon)}>favorite</span> in Santiago, Chile
    </Wrapper>
  )
}
