import * as React from 'react'
import CvPdf from './cv.pdf'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Translations } from '@app/shared/locales/translations'
import { Link } from 'react-router-dom'

const LinkMailTo = 'mailto:vsalgadopb@gmail.com'

const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  margin: 20px 0 20px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  a {
    line-height: 30px;
    margin: 8px 0;
  }
`

export default function Nav(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Link to="/opensource">{t(Translations.nav.openSource)}</Link>
      <a href={LinkMailTo} target="_blank" rel="noreferrer">
        {t(Translations.nav.contact)}
      </a>
      <a href={CvPdf} target="_blank" rel="noreferrer">
        CV
      </a>
    </Wrapper>
  )
}
