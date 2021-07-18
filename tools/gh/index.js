'use strict'

const FS = require('fs')
const Path = require('path')
const { Octokit } = require('@octokit/rest')

const oktokit = new Octokit()

oktokit.rest.repos
  .listForUser({ username: 'vitorsalgado', type: 'owner', sort: 'pushed', per_page: 100 })
  .then(response => response.data)
  .then(repos =>
    repos
      .filter(repo => !repo.fork)
      .filter(repo => !repo.archived)
      .filter(repo => repo.language)
      .filter(repo => !repo.private)
      .map(repo => ({
        id: repo.name,
        name: repo.name,
        description: repo.description,
        language: [repo.language],
        repository: repo.html_url,
        package: repo.homepage ? repo.homepage : null
      }))
  )
  .then(data => FS.writeFileSync(Path.join(process.cwd(), 'gh_repos_data.json'), JSON.stringify(data, 2, 2)))
