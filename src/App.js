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
    var _this2 = this;
    var profile = React.createElement("div", { className: "App" },
      React.createElement("div", { className: "App-header" },
        React.createElement("h2", { className: "App-intro" }, this.state.header)
      ),
      React.createElement("div", { className: "App-intro" },
        React.createElement("ul", null,
          this.state.repository.length > 0 ? undefined : React.createElement(
            'li',
            { className: 'loading' },
            'Loading...'
          ),
          this.state.repository.map(function (item, i) {
            return React.createElement(
              'li',
              { key: i, className: 'item', onClick: _this2.selectItem.bind(_this2, item) },
              React.createElement(
                'div',
                { className: 'avatar' },
                item.name.substr(0, 1)
              ),
              React.createElement(
                'div',
                { className: 'name' },
                item.name
              )
            );
          })
        )
      )
    );
    return profile
  }
}

export default App;
