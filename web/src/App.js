import React from 'react';
import axios from 'axios';
import LanguageFilter from './LanguageFilter';
import RepoList from './RepoList';
import './App.css';

const REPOS_URI = 'http://localhost:4000/repos';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      languages: [],
      selectedLanguage: null,
      error: null,
    };

    this.onLanguageSelect = this.onLanguageSelect.bind(this);
    this.onFilterReset = this.onFilterReset.bind(this);
  }

  componentDidMount() {
    axios.get(REPOS_URI).then((response) => {
      const repos = response.data;

      const languages = repos.reduce((result, repo) => {
        if (!result.includes(repo.language)) {
          result.push(repo.language);
        }
        return result;
      }, []);

      this.setState({ repos, languages });
    }).catch((error) => {
      this.setState({ error });
    });
  }

  onLanguageSelect(language) {
    this.setState({ selectedLanguage: language });
  }

  onFilterReset() {
    this.setState({ selectedLanguage: null });
  }

  render() {
    if (this.state.error) {
      return <p>Oops, an error occured while fetching repos...</p>;
    }

    const visibleRepos = this.state.selectedLanguage ?
      this.state.repos.filter(repo => repo.language === this.state.selectedLanguage) :
      this.state.repos;

    return (
      <div className="App">
        <LanguageFilter
          languages={this.state.languages}
          selectedLanguage={this.state.selectedLanguage}
          onLanguageSelect={this.onLanguageSelect}
          onReset={this.onFilterReset}
        />
        <RepoList
          repos={visibleRepos}
          onLanguageSelect={this.onLanguageSelect}
        />
      </div>
    );
  }
}

export default App;
