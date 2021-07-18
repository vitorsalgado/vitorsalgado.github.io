import React from 'react'
import { Project } from '@app/features/OpenSource/projects.data'
import { GithubIcon } from '@app/components/GithubIcon'
import Icon from '@app/components/Icon'
import styled from 'styled-components'
import { fromNullable } from '@app/shared/utils/fn/optional'
import { useTranslation } from 'react-i18next'
import { MediaQueries } from '@app/app-vars'
import { Translations } from '@app/shared/locales/translations'

const Item = styled.article`
  border-radius: var(--border-radius);
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: var(--border);
  flex: 0 0 45%;
  max-width: 50%;

  @media (${MediaQueries.maxWidth}) {
    max-width: 90%;
    width: 90%;
  }
`

const Name = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 3.2rem;
  border-bottom: var(--border);
`

const Description = styled.p`
  color: #3c4650;
  opacity: 0.89;
  flex-grow: 1;
  margin-bottom: auto;
  padding-bottom: 20px;
`

const Languages = styled.div`
  margin: 10px 0;
`

const Language = styled.span`
  color: #fff;
  font-size: 14px;
  display: inline-block;
  margin-right: 10px;
  padding: 4px 8px;
  background: var(--color-accent);
  border-radius: var(--border-radius);
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: auto;
  font-size: 1.6rem;
`

const Link = styled.a`
  padding-right: 20px;
  vertical-align: middle;

  :hover {
    color: #232323;
    font-weight: normal;
  }
`

interface Props {
  project: Project
}

export default function Repo({ project }: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <Item>
      <Name>{project.name}</Name>
      <Languages>
        {project.language.map((language: string) => (
          <Language key={language}>{language}</Language>
        ))}
      </Languages>
      <Description>{t(project.description)}</Description>
      <Links>
        <Link href={project.repository} title={project.name} target="_blank" rel="noreferrer">
          <GithubIcon />
        </Link>
        {fromNullable(project.package)
          .map(value => (
            <Link
              key={value}
              href={value}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} ${t(Translations.opensource.repository)}`}
            >
              <Icon icon={'open_in_new'} />
            </Link>
          ))
          .orNothing()}
        {fromNullable(project.site)
          .map(value => (
            <Link
              key={value}
              href={value}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} ${t(Translations.opensource.site)}`}
            >
              <Icon icon={'public'} />
            </Link>
          ))
          .orNothing()}
      </Links>
    </Item>
  )
}
