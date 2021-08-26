# @e-ther-inc/beta.e-ther-inc.com

[![Release](https://github.com/e-ther-inc/beta.e-ther-inc.com/actions/workflows/release.yml/badge.svg)](https://github.com/e-ther-inc/beta.e-ther-inc.com/actions/workflows/release.yml)
 [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements

In order to run the project from a container we need `node>=16`, `npm>=7` and `docker>=20` installed on our development machines.

## Folder structure

A quick look at the top-level files and directories you'll see in a Next.js project.

```
├──── beta.e-ther-inc.com
│  ├── .github/
│  ├── .husky/
│  ├── pages/
│  ├── public/
│  ├── styles/
│  ├── .czrc
│  ├── .editorconfig
│  ├── .env.development
│  ├── .env.production
│  ├── .eslintrc.js
│  ├── .gitattributes
│  ├── .gitignore
│  ├── .npmrc
│  ├── Dockerfile
│  ├── next.config.js
│  ├── npm-shrinkwrap.json
│  ├── package.json
│  ├── README.md
│  └── release.config.js
```

## Installation

Clone the package via `git`:

```shell
git clone git@github.com:e-ther-inc/beta.e-ther-inc.com.git
```

Go into the cloned repository and install `node` dependencies:

```shell
npm ci
```

## Application requirements

This repository is featuring granular controls fully orthogonal to environment variables as specified by [the twelve-factor app](https://12factor.net) guidelines.

In order for the application to run we need the following environment variables set similar to the following example.
Without these variables the application will fail to start, so in order for the app to start locally we need to create an `.env` file with the following values:

```shell script
SASS_PATH="node_modules"
```

They are currently set to default in their per environment files `.env.development` and `.env.production`.

## How to use

To develop locally just run:

```shell
npm start
```

## Docker

This repository build automatically to `ghcr.io` but you can always test the implementation:

```shell
docker build . -t beta.e-ther-inc.com
docker run -dit --rm -p 8080:80 --name beta.e-ther-inc.com beta.e-ther-inc.com
```

## Contributing

This repository uses `husky` with pre-commit and message hooks. All you need to do after staging some files is to run:

```shell
npm run push
```
