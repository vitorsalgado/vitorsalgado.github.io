import React, { MutableRefObject, useRef } from 'react'
import styled from 'styled-components'
import Icon from '@app/components/Icon'
import { isEnter } from '@app/shared/utils/keyboard'
import { MediaQueries } from '@app/app-vars'
import { useTranslation } from 'react-i18next'
import { Translations } from '@app/shared/locales/translations'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  background: #fff;
  padding: 5px;
  border-radius: var(--border-radius);
  transition: box-shadow 0.1s ease-in-out;
  box-shadow: var(--box-shadow);

  ::after {
    clear: both;
    content: '';
    display: table;
  }

  @media (${MediaQueries.maxWidth}) {
    width: 90%;
  }
`

const Input = styled.input`
  width: 90%;
  outline: none;
  float: left;
  font-size: 18px;
  height: 35px;
  padding-right: 15px;
`

const Btn = styled.button`
  width: 10%;
  float: left;
  cursor: pointer;
  background: var(--color-accent);
  color: #fff;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;

  :hover {
    background: var(--color-accent);
  }
`

export interface SearchBoxProps {
  onChange: (value: string) => void
}

export default function SearchBox({ onChange }: SearchBoxProps): JSX.Element {
  const { t } = useTranslation()
  const searcher = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isEnter(e.key)) {
      onChange(e.currentTarget.value.toLowerCase())
    }
  }

  const onClick = () => onChange(searcher.current.value.toLowerCase())

  return (
    <Wrapper>
      <label htmlFor="search-box">{t(Translations.searchBox.label)}</label>
      <Input
        id="search-box"
        type="text"
        ref={searcher}
        onKeyPress={onEnter}
        aria-label={t(Translations.searchBox.label)}
      />
      <Btn type={'button'} onClick={onClick}>
        <Icon icon={'search'} />
      </Btn>
    </Wrapper>
  )
}
