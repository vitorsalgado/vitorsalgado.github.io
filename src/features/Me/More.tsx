import * as React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Translations } from '@app/shared/locales/translations'

const Wrapper = styled.div`
  width: 100%;
  padding: 25px 0;
`

const Title = styled.h3`
  border-bottom: var(--border-accent);
  font-size: 16px;
  padding-bottom: 10px;
  font-weight: bold;
`

const Links = styled.div`
  margin: 10px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
`

const Link = styled.a.attrs(() => ({ rel: 'noreferrer', target: '_blank' }))`
  margin-bottom: 10px;
`

export default function More(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Title>{t(Translations.nav.more)}</Title>
      <Links>
        <Link href="https://github.com/vitorsalgado">GitHub</Link>
        <Link href="https://www.linkedin.com/in/vitorsalgado/">LinkedIn</Link>
        <Link href="https://marketplace.visualstudio.com/search?term=publisher%3A%22Vitor%20Hugo%20Salgado%22&target=VSCode&category=All%20categories&sortBy=Relevance">
          {t(Translations.nav.vscodeExt)}
        </Link>
        <Link href="https://chrome.google.com/webstore/detail/detetive-de-cupons-e-ofer/obhoegnhoffpojcnnkknbiilaphdmeea?hl=en-US&authuser=0">
          {t(Translations.nav.chromeExt)}
        </Link>
      </Links>
    </Wrapper>
  )
}
