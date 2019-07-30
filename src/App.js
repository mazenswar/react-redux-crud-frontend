import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Components/Master/Nav";
import Routes from "./Components/Master/Routes/Routes";
import { fetchNotesFromDB } from "./Redux/adapters/notesAdapter";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    const { fetchNotesFromDB } = this.props;
    fetchNotesFromDB();
  }

  render() {
    return (
      <Router>
        <h1>Redux CRUD</h1>
        <Nav />
        <Routes />
      </Router>
    );
  }
}

const mapDispatchToProps = {
  fetchNotesFromDB
};

export default connect(
  null,
  mapDispatchToProps
)(App);
