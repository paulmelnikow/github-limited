'use strict'

const ghRateLimit = require('gh-rate-limit')
const mapValues = require('lodash.mapvalues')
const moment = require('moment')

function prettify(result) {
  return mapValues(result, ({ limit, remaining, reset }) => ({
    remaining: `${remaining} of ${limit}`,
    reset: moment.unix(reset).fromNow(),
  }))
}

async function rateLimitForClientId(clientId, clientSecret) {
  return ghRateLimit({
    qs: { client_id: clientId, client_secret: clientSecret },
  })
}

async function rateLimitForToken(token) {
  return ghRateLimit({ token })
}

module.exports = {
  rateLimitForClientId,
  rateLimitForToken,
  prettify,
}
