const express = require('express');
const rp = require('request-promise');
const localRepos = require('../../../data/repos.json');

const REPOS_ENDPOINT = 'https://api.github.com/users/silverorange/repos';
const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res, next) => {
  rp({
    uri: REPOS_ENDPOINT,
    headers: { 'User-Agent': 'Request-Promise' },
    json: true,
  }).then((apiRepos) => {
    const reposWithoutForked = localRepos.concat(apiRepos).filter(repo => repo.fork === false);

    res.header('Content-Type', 'application/json');
    res.status(200);
    res.send(reposWithoutForked);
  }).catch((err) => {
    next(err);
  });
});

module.exports = router;
