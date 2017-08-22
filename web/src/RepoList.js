import React from 'react';
import PropTypes from 'prop-types';
import RepoSummary from './RepoSummary';

function RepoList({ repos, onLanguageSelect }) {
  return (
    <div>
      {
        repos.map(repo => (
          <RepoSummary key={repo.id} repo={repo} onLanguageSelect={onLanguageSelect} />
        ))
      }
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLanguageSelect: PropTypes.func.isRequired,
};

export default RepoList;
