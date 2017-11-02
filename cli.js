#!/usr/bin/env node

/* eslint-disable no-console */

'use strict'

const yaml = require('js-yaml')
const { ArgumentParser } = require('argparse')
const { prettify, rateLimitForClientId, rateLimitForToken } = require('.')

async function main(inArgs) {
  const parser = new ArgumentParser({
    description: 'Troubleshoot GitHub rate limits',
  })
  parser.addArgument(['-c', '--client'], {
    nargs: 2,
    metavar: ['CLIENT_ID', 'CLIENT_SECRET'],
    help: 'GitHub client ID and secret',
  })
  parser.addArgument(['-t', '--token'], { help: 'GitHub token' })

  const args = parser.parseArgs(inArgs)

  if (!args.client && !args.token) {
    parser.printUsage()
    process.exit(1)
  }

  let result
  if (args.client) {
    result = await rateLimitForClientId(...args.client)
  } else {
    result = await rateLimitForToken(args.token)
  }

  const prettified = prettify(result)
  console.log(yaml.safeDump(prettified))
}

module.exports = main

if (require.main === module) {
  ;(async () => {
    try {
      await main()
    } catch (e) {
      console.error(e)
      process.exit(1)
    }
  })()
}
