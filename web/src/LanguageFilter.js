import React from 'react';
import PropTypes from 'prop-types';
import LanguageButton from './LanguageButton';
import './LanguageFilter.css';

function LanguageFilter({ languages, selectedLanguage, onLanguageSelect, onReset }) {
  return (
    <div className="LanguageFilter">
      {
        languages.map(language => (
          <LanguageButton
            language={language}
            key={language}
            selected={language === selectedLanguage}
            onClick={onLanguageSelect}
          />
        ))
      }
      <button className="reset" onClick={onReset}>
        Clear Filter
      </button>
    </div>
  );
}

LanguageFilter.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedLanguage: PropTypes.string,
  onLanguageSelect: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

LanguageFilter.defaultProps = {
  selectedLanguage: null,
};

export default LanguageFilter;
