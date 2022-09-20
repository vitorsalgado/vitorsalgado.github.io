import './base.scss'
import './favicon.ico'
import './shared/locales/i18n'

import * as React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Container } from './components/Container'
import Content from './components/Content'
import OpenSource from './features/OpenSource'
import Me from './features/Me'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import ProfileImage from './features/Me/avatar.jpg'

export default function App(): JSX.Element {
  const { i18n } = useTranslation()

  return (
    <HashRouter>
      <Helmet
        titleTemplate="Vitor Hugo Salgado - %s"
        defaultTitle="Vitor Hugo Salgado - Open Source"
        htmlAttributes={{ lang: i18n.language }}
      >
        <link rel="preload" as="image" href={ProfileImage} />
        <meta property="og:image" content={ProfileImage} />
      </Helmet>
      <Container>
        <Me />
        <Content>
          <Routes>
            <Route path="/opensource" element={<OpenSource />} />
            <Route path="*" element={<OpenSource />} />
          </Routes>
        </Content>
      </Container>
    </HashRouter>
  )
}
