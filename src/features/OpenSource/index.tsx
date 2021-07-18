import * as React from 'react'
import Title from '@app/components/Title'
import SubTitle from '@app/components/SubTitle'
import styled from 'styled-components'
import { Project } from '@app/features/OpenSource/projects.data'
import Repo from '@app/features/OpenSource/Repo'
import { useDispatch, useSelector } from 'react-redux'
import SearchBox from '@app/components/SearchBox'
import { State } from '@app/shared/store'
import EmptyState from '@app/components/EmptyState'
import { filterAction } from '@app/features/OpenSource/filter'
import { MediaQueries } from '@app/app-vars'
import ContentHeader from '@app/components/ContentHeader'
import { useTranslation } from 'react-i18next'
import { Translations } from '@app/shared/locales/translations'
import { Helmet } from 'react-helmet-async'

const Repositories = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 0;
  gap: 15px;

  @media (${MediaQueries.maxWidth}) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`

export default function OpenSource(): JSX.Element {
  const projects = useSelector((state: State) => state.opensource.projects)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>Open Source</title>
      </Helmet>
      <ContentHeader>
        <Title>{t(Translations.opensource.title)}</Title>
        <SubTitle>{t(Translations.opensource.subTitle)}</SubTitle>
        <SearchBox onChange={value => dispatch(filterAction(value))} />
      </ContentHeader>
      {projects.length === 0 ? (
        <EmptyState />
      ) : (
        <Repositories>
          {projects.map((project: Project) => (
            <Repo key={project.id} project={project} />
          ))}
        </Repositories>
      )}
    </>
  )
}
