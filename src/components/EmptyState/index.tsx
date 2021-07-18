import React from 'react'
import styled from 'styled-components'
import Icon from '@app/components/Icon'

const Empty = styled.div`
  margin: 30px 0 0;
  font-size: 26px;
`

export default function EmptyState(): JSX.Element {
  return (
    <Empty>
      No results found for your search. <Icon icon={'sentiment_dissatisfied'} />
    </Empty>
  )
}
