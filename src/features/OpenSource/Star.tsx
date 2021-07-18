import * as React from 'react'
import styled from 'styled-components'
import Icon from '@app/components/Icon'

const Mark = styled.span`
  font-size: 20px;
  display: inline-block;

  :before {
    content: '•';
    margin: 0 10px;
  }
`

export default function Star(stars: number): JSX.Element {
  return (
    <Mark>
      ⁄{stars} <Icon icon={'star'} />
    </Mark>
  )
}
