import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      header: "List all my Git hub Repositories",
      footer: "Git Repositories",
      repository: []
    }
  }

  componentDidMount() {
    this.renderPeoples()
  }

  selectItem(item) {
    // console.log(item)
  }

  renderPeoples() {
    let self = this;
    fetch('https://api.github.com/users/sujeesh-Lal/repos')
      .then((resp) => resp.json())
      .then(function (data) {
        self.setState({
          repository: data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>{this.state.header}</h2>
        </div>
        <div className="App-intro">
          <ul>
            {
              this.state.repository.length > 0 ? undefined : <li className="loading">Loading...</li>
            }
            {this.state.repository.map(
              (item, i) => {
                return <li key={i} className="item" onClick={this.selectItem.bind(this, item)}>
                  <div className="avatar">{item.name.substr(0, 1)}</div>
                  <div className="name">{item.name}</div>
                </li>
              }
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
