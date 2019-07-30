import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../Stylesheets/allNotes.scss";

class AllNotes extends React.Component {
  renderNotes = () => {
    const { notes } = this.props;
    return notes.map(note => (
      <Link className="single-note-link" key={note.id} to={`/notes/${note.id}`}>
        {note.title}
      </Link>
    ));
  };

  render() {
    return (
      <div className="notes-container">
        <h2>Notes</h2>
        {this.renderNotes()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ notes: state });

export default connect(mapStateToProps)(AllNotes);
