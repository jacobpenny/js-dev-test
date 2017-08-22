import React from 'react';
import PropTypes from 'prop-types';
import './LanguageButton.css';

function LanguageButton({ language, selected, onClick }) {
  return (
    <button
      value={language}
      className={selected ? 'LanguageButton selected' : 'LanguageButton'}
      onClick={() => onClick(language)}
    >
      {language}
    </button>
  );
}

LanguageButton.propTypes = {
  language: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

LanguageButton.defaultProps = {
  selected: false,
  onClick: () => {},
};

export default LanguageButton;
