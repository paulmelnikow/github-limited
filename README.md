# github-limited

[![version](https://img.shields.io/npm/v/github-limited.svg?style=flat-square)][npm]
[![license](https://img.shields.io/npm/l/github-limited.svg?style=flat-square)][npm]
[![build](https://img.shields.io/circleci/project/github/paulmelnikow/github-limited.svg?style=flat-square)][build]
[![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)][prettier]

[npm]: https://npmjs.com/github-limited/
[build]: https://circleci.com/gh/paulmelnikow/github-limited/tree/master
[prettier]: https://prettier.io/

Command-line utility for troubleshooting Github rate limits.

```console
$ github-limited -t token
$ github-limited -c client_id client_secret
```

Example output:

```console
core:
  remaining: 12479 of 12500
  reset: in 18 minutes
search:
  remaining: 30 of 30
  reset: in a minute
graphql:
  remaining: 5000 of 5000
  reset: in an hour
```

## Installation

Requires Node 8+.

```
npm install -g github-limited
```

## Contribute

- Issue Tracker: https://github.com/paulmelnikow/github-limited/issues
- Source Code: https://github.com/paulmelnikow/github-limited

Pull requests welcome!

## Support

If you are having issues, please let me know.

## License

The project is licensed under the MIT license.
