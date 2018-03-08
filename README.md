github-limited
==============

[![Greenkeeper badge](https://badges.greenkeeper.io/paulmelnikow/github-limited.svg)](https://greenkeeper.io/)

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

Installation
------------

Requires Node 8+.

```
npm install -g github-limited
```


Contribute
----------

- Issue Tracker: https://github.com/paulmelnikow/github-limited/issues
- Source Code: https://github.com/paulmelnikow/github-limited

Pull requests welcome!


Support
-------

If you are having issues, please let me know.


License
-------

The project is licensed under the MIT license.
