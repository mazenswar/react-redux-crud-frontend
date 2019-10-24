import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/Nav';
import Routes from './Routes';
import noteActions from './Redux/actions/noteActions';

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
  fetchNotesFromDB: noteActions.fetchNotesFromDB
};

export default connect(
  null,
  mapDispatchToProps
)(App);
