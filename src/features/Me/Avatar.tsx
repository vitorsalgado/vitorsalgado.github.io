import * as React from 'react'
import styled from 'styled-components'

const Circles = styled.div`
  position: relative;
`

const CircleAround = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: var(--color-accent);
`

const CircleRight = styled.div`
  position: absolute;
  background: #fdbd77;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  right: -10px;
  top: 10px;
`

const CircleLeft = styled.div`
  position: absolute;
  background: #05e9b5;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  right: 10px;
  bottom: -10px;
`

const CircleTop = styled.div`
  position: absolute;
  background: #f26941;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  left: -10px;
  top: -10px;
  margin-left: 10px;
`

const PhotoWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100px;
  height: 100px;
  border-radius: 60px;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -50px;
`

const Photo = styled.img`
  object-fit: cover;
  width: 100px;
  height: 100px;
`

export interface Props {
  image: string
  imageAlt: string
}

export default function Avatar(props: Props): JSX.Element {
  return (
    <Circles>
      <CircleTop />
      <CircleRight />
      <CircleLeft />
      <CircleAround>
        <PhotoWrapper>
          <Photo src={props.image} alt={props.imageAlt} />
        </PhotoWrapper>
      </CircleAround>
    </Circles>
  )
}
