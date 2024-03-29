import 'dotenv/config'
import type { Config as JestConfig } from '@jest/types'
import Path from 'path'

process.env.JEST_PUPPETEER_CONFIG = Path.resolve('./test/setup/jest-puppeteer.config.js')

const shared: JestConfig.InitialOptions = {
  verbose: true,
  collectCoverage: false,
  restoreMocks: true,

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: Path.join(process.cwd(), 'tsconfig.test.json'),
      },
    ],
  },
}

const config: JestConfig.InitialOptions = {
  projects: [
    {
      displayName: 'Unit',
      rootDir: './src',
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: [Path.resolve('./src/test-setup.config.ts')],
      moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|txt|pdf)$': Path.resolve(
          './test/setup/mocks/files/index.js',
        ),
        '\\.(css|less|scss)$': Path.resolve('./test/setup/mocks/styles/index.js'),
        '^@app/(.*)$': '<rootDir>/$1',
      },

      ...shared,
    },
  ],
}

export default config
