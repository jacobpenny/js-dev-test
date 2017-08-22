import React from 'react';
import PropTypes from 'prop-types';
import LanguageButton from './LanguageButton';
import './RepoSummary.css';

function RepoSummary({ repo, onLanguageSelect }) {
  return (
    <div className="RepoSummary">
      <a href={repo.html_url} className="name">{repo.name}</a>
      <p className="smallText">{repo.description}</p>
      <div className="footer">
        <div className="left">
          <LanguageButton
            language={repo.language}
            onClick={onLanguageSelect}
          />
        </div>
        <span className="smallText">
          Forks: {repo.forks_count}
        </span>
      </div>
    </div>
  );
}

RepoSummary.propTypes = {
  repo: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  onLanguageSelect: PropTypes.func.isRequired,
};

export default RepoSummary;
