import Avatar from '@app/features/Me/Avatar'
import * as React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Translations } from '@app/shared/locales/translations'
import Nav from '@app/features/Me/Nav'
import ProfileAvatar from './avatar.jpg'
import { MediaQueries } from '@app/app-vars'
import More from '@app/features/Me/More'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`

const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: start;
  width: 100%;
  border-bottom: var(--border-accent);
  padding-bottom: 5px;

  @media (${MediaQueries.maxWidth}) {
    align-items: center;
    margin-top: 10px;
  }
`

const Name = styled.h1`
  margin: 25px 0 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
`

const JobTitle = styled.h2`
  font-size: 16px;
  margin: 5px 0;
  padding: 0;
`

export default function Profile(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar image={ProfileAvatar} imageAlt={t(Translations.profile.profile)} />
        <Name>Vitor Hugo Salgado</Name>
        <JobTitle>{t(Translations.profile.jobTitle)}</JobTitle>
      </AvatarWrapper>
      <Nav />
      <More />
    </Wrapper>
  )
}
