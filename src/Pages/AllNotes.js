import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AllNotes = props => {
  const renderNotes = () => {
    const { notes } = props;
    return notes.map(note => (
      <Link className="single-note-link" key={note.id} to={`/notes/${note.id}`}>
        {note.title}
      </Link>
    ));
  };

  return (
    <div className="notes-container">
      <h2>Notes</h2>
      {renderNotes()}
    </div>
  );
};

const mapStateToProps = state => ({ notes: state });

export default connect(mapStateToProps)(AllNotes);
