SHELL := /bin/bash

# Global Parameters
# ---
PROJECT := react-web-starter
DOCKER_NAME := PROJECT
NGINX_PORT := 3000
CONTEXT := $$(pwd)

# Help
# ---
.DEFAULT_GOAL := help
.PHONY: help
help:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

start: ## Start Dev Server with Hot Reload
	@yarn start


# Dev Environment Utilities
# ---

nvm: ## Install Node.js version described on .nvmrc.
	[ -s "$$HOME/.nvm/nvm.sh" ] && . "$$HOME/.nvm/nvm.sh" && \
	nvm install $$(cat .nvmrc) && \
	nvm use
