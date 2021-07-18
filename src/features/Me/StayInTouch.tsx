import * as React from 'react'
import GithubIcon from '@app/features/Me/icons/github.png'
import LinkedInIcon from '@app/features/Me/icons/linkedin.png'
import VsCodeIcon from '@app/features/Me/icons/vscode.png'
import ChromeExtIcon from '@app/features/Me/icons/chrome.png'
import MailToIcon from '@app/features/Me/icons/mail.png'
import styled from 'styled-components'

const Size = '28px'

const Wrapper = styled.div`
  width: 100%;
  padding: 25px 0;
`

const Title = styled.h3`
  border-bottom: var(--border-accent);
  font-size: 16px;
  padding-bottom: 10px;
`

const SocialLinks = styled.div`
  margin: 10px 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Icon = styled.img`
  height: ${Size};
  width: ${Size};
  display: block;
  vertical-align: middle;
  background: transparent;
`

const Link = styled.a.attrs(() => ({ rel: 'noreferrer', target: '_blank' }))``

export default function StayInTouch(): JSX.Element {
  return (
    <Wrapper>
      <Title>Stay In Touch</Title>
      <SocialLinks>
        <Link href="https://github.com/vitorsalgado">
          <Icon src={GithubIcon} alt="Github" />
        </Link>
        <Link href="https://www.linkedin.com/in/vitorsalgado/">
          <Icon src={LinkedInIcon} alt="LinkedIn" />
        </Link>
        <Link href="https://marketplace.visualstudio.com/search?term=publisher%3A%22Vitor%20Hugo%20Salgado%22&target=VSCode&category=All%20categories&sortBy=Relevance">
          <Icon src={VsCodeIcon} alt="VsCode Extensions MarketPlace" />
        </Link>
        <Link href="https://chrome.google.com/webstore/detail/detetive-de-cupons-e-ofer/obhoegnhoffpojcnnkknbiilaphdmeea?hl=en-US&authuser=0">
          <Icon src={ChromeExtIcon} alt="Chrome Extension" />
        </Link>
        <Link href="mailto:vsalgadopb@gmail.com" rel="noreferrer">
          <Icon src={MailToIcon} alt="Mail To" />
        </Link>
      </SocialLinks>
    </Wrapper>
  )
}
