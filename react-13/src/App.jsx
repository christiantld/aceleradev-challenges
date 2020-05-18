import React, { Component } from "react";

import TopBar from "../src/components/Topbar";
import Filters from "../src/components/Filters";
import Contacts from "../src/components/Contacts";

import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          contactList: response,
          loading: false,
        });
      });
  }

  render() {
    return (
      <>
        <TopBar />
        <Filters />
        <div className="container" data-testid="contacts">
          {this.state.loading ? (
            <span>Carregando...</span>
          ) : (
            <Contacts contacts={this.state.contactList} />
          )}
        </div>
      </>
    );
  }
}

export default App;
