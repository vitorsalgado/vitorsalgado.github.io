import { Translations } from '@app/shared/locales/translations'

export interface Project {
  id: string
  name: string
  description: string
  language: string[]
  repository: string
  package?: string
  site?: string
}

const Projects: Array<Project> = [
  {
    id: 'drizzle-http',
    name: 'Drizzle-Http',
    description: Translations.opensource.drizzleHttp,
    language: ['TypeScript'],
    repository: 'https://github.com/vitorsalgado/drizzle-http',
    package: 'https://www.npmjs.com/package/drizzle-http',
  },
  {
    id: 'learning-spring-cloud',
    name: 'Learning Spring Cloud',
    description: Translations.opensource.learningSpringCloud,
    language: ['Kotlin', 'Java'],
    repository: 'https://github.com/vitorsalgado/learning-spring-cloud',
  },
  {
    id: 'gow',
    name: 'Gow - Go Worker Pool',
    description: Translations.opensource.gow,
    language: ['Go'],
    repository: 'https://github.com/vitorsalgado/gow',
  },
  {
    id: 'camara-deputados-graphql',
    name: 'GraphQL API · Chamber of Deputies of Brazil',
    description: Translations.opensource.camaraGraphQL,
    language: ['TypeScript'],
    repository: 'https://github.com/vitorsalgado/camara-deputados-graphql',
    site: 'https://graphql-chamber-deputies-br.herokuapp.com/graphiql',
  },
  {
    id: 'grpc-go',
    name: 'gRPC Go',
    description: Translations.opensource.gRPCGo,
    language: ['Go'],
    repository: 'https://github.com/vitorsalgado/grpc-go',
  },
  {
    id: 'react-web-starter',
    name: 'React Web Starter',
    description: Translations.opensource.reactWebStarter,
    language: ['TypeScript', 'JavaScript'],
    repository: 'https://github.com/vitorsalgado/react-web-starter',
    package: 'https://www.npmjs.com/package/create-react-ts-web-starter',
  },
  {
    id: 'vscode-redis',
    name: 'VsCode Redis',
    description: Translations.opensource.vsCodeRedis,
    language: ['JavaScript'],
    repository: 'https://github.com/vitorsalgado/vscode-redis',
    package: 'https://marketplace.visualstudio.com/items?itemName=vitorsalgado.vscode-redis',
  },
  {
    id: 'nodejs-boilerplate',
    name: 'Node.js Boilerplate',
    description: Translations.opensource.nodejsBoilerplate,
    language: ['TypeScript'],
    repository: 'https://github.com/vitorsalgado/nodejs-boilerplate',
  },
  {
    id: 'swagjs',
    name: 'SwagJS',
    description: Translations.opensource.swagJs,
    language: ['JavaScript'],
    repository: 'https://github.com/vitorsalgado/swagjs',
    package: 'https://www.npmjs.com/package/swagjs',
  },
  {
    id: 'snake-game',
    name: 'Snake Game',
    description: Translations.opensource.snakeGame,
    language: ['JavaScript'],
    repository: 'https://github.com/vitorsalgado/snake-game',
    site: 'https://vitorsalgado.github.io/snake-game/',
  },
  {
    id: 'kotlin-fp',
    name: 'Kotlin Functional',
    description: Translations.opensource.kotlinFp,
    language: ['Kotlin'],
    repository: 'https://github.com/vitorsalgado/kotlin-fp',
  },
  {
    id: 'netsocks',
    name: 'NetSocks',
    description: Translations.opensource.netSocks,
    language: ['Java'],
    repository: 'https://github.com/vitorsalgado/netsocks',
  },
  {
    id: 'android-build-box',
    name: 'Android Build Box',
    description: Translations.opensource.androidBuildBox,
    language: ['Shell', 'Docker'],
    repository: 'https://github.com/vitorsalgado/android-build-box',
    package: 'https://hub.docker.com/r/vitorsalgado/android-build-box/',
  },
  {
    id: 'ci-cd-training-proposal',
    name: 'CI/CD Training',
    description: Translations.opensource.ciCdTraining,
    language: ['Docker', 'Jenkins'],
    repository: 'https://github.com/vitorsalgado/ci-cd-training-proposal',
    package: 'https://trello.com/b/ce1BS8Oh',
  },
]

export default Projects
